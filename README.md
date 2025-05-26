# Vinu Paul – Developer Portfolio

Welcome to my personal developer portfolio, built with **React**, **Tailwind CSS**, and deployed on **GitHub Pages**. This project showcases my experience, projects, skills, and includes a contact form that submits messages to **Google Sheets** and sends confirmation emails.

---

## 🌐 Live Demo

🔗 [vinupaul.github.io](https://vinupaul.github.io)

---

## 📁 Features

- ⚡ **Smooth scrolling navigation**
- 📂 **Experience Timeline**
- 🧠 **Projects with visual descriptions**
- 📊 **Skills & proficiency bars**
- 💬 **Google Sheets-integrated contact form**
- ✅ Email confirmation via **Google Apps Script**
- 📱 Responsive design with mobile menu
- 🌙 Dark blur backgrounds for aesthetic clarity

---

## 🛠️ Tech Stack

| Frontend        | Utilities          | Deployment         |
|-----------------|--------------------|---------------------|
| React.js        | Tailwind CSS       | GitHub Pages        |
| Framer Motion   | React Icons        | Google Apps Script  |

---

## 📨 Contact Form Integration

Form submissions are handled by a **Google Apps Script Web App**, which:
- Appends submissions to a connected **Google Sheet**
- Sends a confirmation email back to the user using `MailApp`

### 📄 Google Apps Script Snippet

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.message
  ]);

  MailApp.sendEmail({
    to: data.email,
    subject: "Thank you for contacting Vinu Paul!",
    htmlBody: `
      <p>Hi ${data.firstName},</p>
      <p>Thank you for reaching out! I've received your message and will get back to you shortly.</p>
      <blockquote>${data.message}</blockquote>
      <p>Best regards,<br/>Vinu Paul</p>
    `
  });

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

> 🔐 Web App deployed with:  
> **Execute as:** Me  
> **Who has access:** Anyone

---

## 🖼️ Screenshots

> Add a few images here (optional):
- About section with background
- Experience timeline
- Project cards
- Skills grid
- Contact form + toast alert

---

## 🚀 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/vinupaul/vinupaul.github.io.git
cd vinupaul.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm start
```

### 4. Build for production

```bash
npm run build
```

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Vinu Paul**  
📫 [LinkedIn](https://linkedin.com/in/vinupaul)  
💻 [GitHub](https://github.com/vinupaul)

---

## ⭐️ Support

If you like this project, consider giving it a ⭐️ on GitHub or reaching out to collaborate!
