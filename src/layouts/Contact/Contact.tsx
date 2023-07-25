import { useState, FormEvent } from 'react';
import {
  Badge,
  Button,
  Card,
  Input,
  Textarea,
  Spacer,
} from '@nextui-org/react';
import { CONTACT_SUCCESS, CONTACT_FAILURE } from '@constants/CONTENT';

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
  const [result, setResult] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [emptyForm, setEmptyForm] = useState<boolean>(false);
  async function formSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(false);
    setError(false);
    setEmptyForm(false);
    const htmlForm = event.target as HTMLFormElement;
    if (htmlForm.email.value.length && htmlForm.email.value.length) {
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
        setError(false);

        setEmptyForm(false);
      }
      if (error) {
        setResult(false);
        setError(error);
        setEmptyForm(false);
      }
    } else {
      setResult(false);
      setError(false);
      setEmptyForm(true);
    }
  }
  return (
    <div className="px-4">
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <Card>
        <form onSubmit={formSubmit}>
          <Card.Header>
            {result && <Badge color="success">{CONTACT_SUCCESS}</Badge>}
            {error ||
              (emptyForm && (
                <Badge color="error">
                  {emptyForm ? 'Nothing to say?' : CONTACT_FAILURE}
                </Badge>
              ))}
          </Card.Header>
          <Card.Body>
            <Textarea
              label={messageTitle}
              placeholder={messagePlaceholder}
              name="message"
              id="message"
            />
            <Spacer />
            <Input
              label={contactTitle}
              placeholder={contactPlaceholder}
              type="email"
              name="email"
              id="email"
            />
          </Card.Body>
          <Card.Footer>
            <Button type="submit">{buttonText}</Button>
          </Card.Footer>
        </form>
      </Card>
    </div>
  );
};

export default Contact;
