import { sendEmail } from '@/app/aws_ses/aws-ses';

export async function POST(request)
{
    //Details to send
    const {fname,email,subject,mobile,message} = await request.json();

     // Create HTML content
     const contentTemplate_data = `
     <html>
         <body>
             <h1>Contact Form Submission</h1>
             <p><strong>Name:</strong> ${fname}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Mobile:</strong> ${mobile}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>
         </body>
     </html>
 `;


    try {
    const emailResult = await sendEmail({
              email: 'ganesh.yachtclubgoa@gmail.com',
              subjectTitle: 'Contact Form Submission',
              contentTemplate: contentTemplate_data,
            });
    
            return new Response(JSON.stringify({ message: 'Email sent', messageId: emailResult, status: 200 }));
          } catch (error) {
            return new Response(JSON.stringify({ message: 'Email sending failed', messageId: emailResult, status: 500 }));
          }
  }