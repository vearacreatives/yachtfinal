import { sendEmail } from "@/app/aws_ses/aws-ses";


export async function POST(request)
{
    const {name,mobile,email,date,no_of_hour,no_of_guest,event,special_req} = await request.json();


    const contentTemplate_data = `
    <html>
    <body>
    <h1>Yacht and Boat Booking Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Mobile:</strong> ${mobile}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Number of hours:</strong> ${no_of_hour}</p>
    <p><strong>Number of guest:</strong> ${no_of_guest}</p>
    <p><strong>Event:</strong> ${event}</p>
    <p><strong>Special Requirements:</strong> ${special_req}</p>
    </body>
    </html>
    `;

    try{
        const emailResult = await sendEmail({
            email: 'ganesh.yachtclubgoa@gmail.com',
            subjectTitle: 'Yacht and Boat Booking Form Submission',
            contentTemplate: contentTemplate_data
        })

        return new Response(JSON.stringify({message: 'Email sent', messageId: emailResult, status: 200}))
    }catch(error){
        return new Response(JSON.stringify({message: 'Email sending failed', messageId: emailResult, status: 500}))
    }
}