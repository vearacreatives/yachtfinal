import { sendEmail } from "@/app/aws_ses/aws-ses";


export async function POST(request)
{
    const {name,mobile,mail,date,occasion,no_guests,no_of_hrs} = await request.json();

    const contentTemplate_data = `
    <html>
    <body>
    <h1>Get In Touch Form Submission</h1>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Mobile:</strong>${mobile}</p>
    <p><strong>Mail:</strong>${mail}</p>
    <p><strong>Date:</strong>${date}</p>
    <p><strong>Occasion:</strong>${occasion}</p>
    <p><strong>Number of Guests:</strong>${no_guests}</p>
    <p><strong>Number of Hours:</strong>${no_of_hrs}</p>
    </body>
    </html>
    `;

    try{
        const emailResult = await sendEmail({
            email:'ganesh.yachtclubgoa@gmail.com',
            subjectTitle: 'Get In Touch Form Submission',
            contentTemplate: contentTemplate_data
        })

        return new Response(JSON.stringify({message: 'Email sent', messageId: emailResult, status: 200}));
    }catch(error){
        return new Response(JSON.stringify({message: 'Email sending failed', messageId: emailResult, status: 500}));
    }
}