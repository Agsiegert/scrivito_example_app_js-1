var Mailchimp = require('mailchimp-api-v3')

const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpListID = process.env.MAILCHIMP_LIST_ID;
const mcRegion = process.env.MAILCHIMP_REGION;

const mailchimp = new Mailchimp(mailChimpAPI);

export function handler(event, context, callback) {
  console.log("EVENT: ", event.body);

  return mailchimp.post(`/lists/${mailChimpListID}/members`, { email_address: event.body, status: 'subscribed' })
  .then(function(results) {
    console.log('RESULTS:', results);
    return {
      statusCode: results.status,
      body: JSON.stringify(results)
    }
  })
  .catch(function(err) {
    console.log('ERROR:', err);
    return { statusCode: 422, body: String(err) };
  });
}
