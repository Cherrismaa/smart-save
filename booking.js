function sendToWhatsApp(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const movie = document.getElementById('movie').value.trim();
  const language = document.getElementById('language').value.trim();
  const theater = document.getElementById('theater').value.trim();
  const datetimeRaw = document.getElementById('date').value;
  const row = document.getElementById('row').value.trim();
  const tickets = document.getElementById('tickets').value.trim();

  // Validate required fields
  if (!name || !phone || !email || !movie || !language || !theater || !datetimeRaw || !tickets) {
    alert("Please fill in all required fields.");
    return;
  }

   // Check if selected datetime is in the future
  const selectedDateTime = new Date(datetimeRaw);
  const now = new Date();
  if (selectedDateTime < now) {
    alert("Please select a date and time in the future.");
    return;
  }

  // Format date and time
  const datetime = new Date(datetimeRaw);
  const formattedDate = datetime.toLocaleDateString('en-GB');
  const formattedTime = datetime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toLowerCase();

  // Construct WhatsApp message
  const message = `Movie Booking Request\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Movie: ${movie} (${language})\n` +
    `Theatre: ${theater}\n` +
    `Date & Time: ${formattedDate} ${formattedTime}\n` +
    `Tickets: ${tickets}\n` +
    `Preferred Seat: ${row || 'Not specified'}`;

  const whatsappNumber = '918328668046'; // Replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  alert("Redirecting to WhatsApp. Please upload your screenshot manually there for clarity.");
  window.open(whatsappLink, '_blank');
}
