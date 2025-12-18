import AWS from 'aws-sdk';

 AWS.config.update({ 
 region: 'ap-south-1',  
 accessKeyId: process.env.NEXT_JS_AWS_ACCESS_KEY, 
 secretAccessKey: process.env.NEXT_JS_AWS_SECRET_ACCESS_KEY, 
 });

 const ses = new AWS.SES({ apiVersion: '2010-12-01' });

 export async function sendEmail ({email, contentTemplate, subjectTitle}) {
    let messageBody =  contentTemplate;
  
  var params = {
    Source: 'Yacht<support@yachtclubgoa.com>',
    Destination: {
      ToAddresses: [
        email
      ],
      BccAddresses: [
        'hello@vearacreatives.com'
      ],
    },
    ReplyToAddresses: [
      'noreply@yachtclubgoa.com',
    ],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: messageBody
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subjectTitle
      }
    }
  };
  

 //console.log('SES params:', JSON.stringify(params, null, 2));

try {
    const result = await ses.sendEmail(params).promise();
    // console.log('Email sent:', result.MessageId);
    return result.MessageId;
  } catch (error) {
    // console.error('Error sending email:', error);
    throw error;
  }
  }