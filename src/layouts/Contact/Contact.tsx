import { useState, FormEvent } from 'react';
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
      <h1 className="text-center text-3xl font-bold mb-6">Contact Us</h1>
      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <form onSubmit={formSubmit}>
          <div className="card-body">
            {result && <div className="badge badge-success mb-4">{CONTACT_SUCCESS}</div>}
            {error ||
              (emptyForm && (
                <div className="badge badge-error mb-4">
                  {emptyForm ? 'Nothing to say?' : CONTACT_FAILURE}
                </div>
              ))}

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">{messageTitle}</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder={messagePlaceholder}
                name="message"
                id="message"
                required
              />
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">{contactTitle}</span>
              </label>
              <input
                className="input input-bordered"
                placeholder={contactPlaceholder}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>

          <div className="card-actions justify-end p-6 pt-0">
            <button className="btn btn-primary" type="submit">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
