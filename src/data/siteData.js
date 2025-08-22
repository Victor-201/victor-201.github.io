// src/data/siteData.js

const siteData = {
  // =========================
  // Thông tin cá nhân
  // =========================
  siteInfo: {
    name: "Nguyễn Văn Thắng",         // Tên tiếng Việt
    displayName: "Victor",            // Tên hiển thị / tiếng Anh
    position: "Full-Stack Web Developer",
    description: {
      vi: "Với vai trò Lập trình viên Full-Stack, tôi xây dựng các ứng dụng web hoàn chỉnh, từ giao diện người dùng tương tác (front-end) đến logic phía máy chủ và cơ sở dữ liệu (back-end). Tôi tạo ra trải nghiệm web thân thiện, responsive và tối ưu hiệu năng.",
      en: "As a Full-Stack Web Developer, I build complete web applications, from interactive user interfaces (front-end) to server-side logic and databases (back-end). I deliver user-friendly, responsive, and performance-optimized web experiences.",
    },
    avatar: "/assets/avatar.jpg",
    email: "victor@example.com",
    phone: "+84 123 456 789",
    location: "Hà Nội, Việt Nam",
    social: {
      github: "https://github.com/victornguyen",
      linkedin: "https://linkedin.com/in/victornguyen",
      twitter: "https://twitter.com/victornguyen",
      facebook: "https://facebook.com/victornguyen",
    },
  },

  // =========================
  // Kỹ năng
  // =========================
  skills: [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js & Express", level: 80 },
    { name: "MongoDB / PostgreSQL", level: 75 },
    { name: "TailwindCSS / SCSS", level: 85 },
    { name: "Framer Motion", level: 70 },
    { name: "RESTful API", level: 80 },
    { name: "Responsive & Mobile-first Design", level: 90 },
    { name: "Git & GitHub", level: 90 },
  ],

  // =========================
  // Dự án
  // =========================
  projects: [
    {
      title: "Portfolio Website",
      description: {
        vi: "Website portfolio cá nhân dùng React, TailwindCSS và Framer Motion, responsive, hỗ trợ dark/light mode. Trình bày kỹ năng, dự án và thông tin liên hệ chuyên nghiệp.",
        en: "Personal portfolio website using React, TailwindCSS, and Framer Motion, responsive, with dark/light mode. Showcases skills, projects, and professional contact information.",
      },
      img: "/assets/projects/portfolio.png",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://github.com/victornguyen/portfolio",
    },
    {
      title: "E-commerce Full-Stack App",
      description: {
        vi: "Ứng dụng bán hàng Full-Stack với React, Node.js, Express và MongoDB. Tính năng CRUD, authentication và responsive UI.",
        en: "Full-Stack e-commerce application using React, Node.js, Express, and MongoDB. Includes CRUD operations, authentication, and responsive UI.",
      },
      img: "/assets/projects/ecommerce.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/victornguyen/ecommerce-app",
    },
    {
      title: "Task Manager Web App",
      description: {
        vi: "Ứng dụng quản lý công việc với chức năng CRUD, phân quyền người dùng, responsive design, hỗ trợ API RESTful.",
        en: "Task management web application with CRUD functionality, user roles, responsive design, and RESTful API support.",
      },
      img: "/assets/projects/task-manager.png",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "https://github.com/victornguyen/task-manager",
    },
  ],

  // =========================
  // Contact
  // =========================
  contact: {
    vi: {
      title: "Liên hệ",
      subtitle: "Hãy gửi email hoặc điền form bên dưới để liên lạc với tôi. Tôi sẽ phản hồi nhanh nhất có thể.",
      placeholderName: "Tên của bạn",
      placeholderEmail: "Email",
      placeholderMessage: "Tin nhắn",
      btnText: "Gửi tin nhắn",
    },
    en: {
      title: "Contact",
      subtitle: "Send me an email or fill the form below to get in touch. I will respond as soon as possible.",
      placeholderName: "Your Name",
      placeholderEmail: "Email",
      placeholderMessage: "Message",
      btnText: "Send Message",
    },
  },
};

export default siteData;
