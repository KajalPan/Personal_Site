// Import the MailchimpSubscribe component from the library.
// This component connects to your Mailchimp email list and handles subscriptions.
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Import your custom Newsletter component that will handle the UI display for the subscription form.
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  /**
   * postUrl: The full URL that Mailchimp uses to add a new subscriber to your list.
   * 
   * process.env.REACT_APP_MAILCHIMP_URL -> Base Mailchimp API endpoint
   * process.env.REACT_APP_MAILCHIMP_U   -> Unique user ID for your Mailchimp account
   * process.env.REACT_APP_MAILCHIMP_ID  -> Audience (list) ID for your Mailchimp mailing list
   * 
   * These are stored in environment variables (.env file) so you don’t expose sensitive info in your code.
   */
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      {/* 
        MailchimpSubscribe component:
        - `url` tells it where to send form data.
        - `render` lets you customize the UI with your own component (Newsletter).
      */}
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          /**
           * Pass props to Newsletter:
           * - status: Current subscription state ("sending", "success", "error")
           * - message: Feedback/error/success message from Mailchimp
           * - onValidated: Function called when form is valid — triggers `subscribe(formData)`
           */
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  )
}
