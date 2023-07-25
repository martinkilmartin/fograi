import { useState, FormEvent } from 'react';
import { Button, Card, Input, Textarea, Spacer } from '@nextui-org/react';
import { CONTACT_SUCCESS, CONTACT_FAILURE } from '@constants/CONTENT';
import { Alert } from '@components/Alert';

type Props = {
  messageTitle: string;
  messagePlaceholder: string;
  contactTitle: string;
  contactPlaceholder: string;
  buttonText: string;
};

const Contact = ({
  messageTitle,
  messagePlaceholder,
  contactTitle,
  contactPlaceholder,
  buttonText,
}: Props): JSX.Element => {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  async function formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const htmlForm = event.target as HTMLFormElement;
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        email: htmlForm.email.value,
        message: htmlForm.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { result, error } = await res.json();
    if (result) {
      setResult(result);
      setError(undefined);
    }
    if (error) {
      setResult(undefined);
      setError(error);
    }
    Card;
  }
  return (
    <div className="px-4">
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      {result && <Alert color="success" text={CONTACT_SUCCESS} />}
      {error && <Alert color="error" text={CONTACT_FAILURE} />}
      <Card>
        <Card.Body>
          <form onSubmit={formSubmit}>
            <Textarea
              label={messageTitle}
              placeholder={messagePlaceholder}
              name="message"
              id="message"
            />
            <Spacer />
            <Input
              label={contactTitle}
              labelPlaceholder={contactPlaceholder}
              type="email"
              name="email"
              id="email"
            />
          </form>
        </Card.Body>
        <Card.Footer>
          <Button>{buttonText}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Contact;
