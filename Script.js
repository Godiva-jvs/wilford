document.addEventListener('DOMContentLoaded',
function() {console.log
const form =
document.getElementById('contactForm');
const responseMessage=
document.getElementById('response message')

form.addEventListener('submit',
async function(event){
    event.preventDefault();
const formData = new
FormData(form);

try{
    const response = await
    fetch('https://sms:+2347039568119//',
{
method:'POST',
body: formData
});
if(!response.ok){
    throw new Error('Failed to submit form');
}
responseMessage.textContent = 
'Message sent successfully!';
form.reset();
}catch(error){
responseMessage.textContent =
'an error occurred while sending the message!';
console.error(error);
}
});
});