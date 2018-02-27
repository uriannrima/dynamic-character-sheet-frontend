import miniToastr from 'mini-toastr';

miniToastr.init();

const NotificationService = {
  async notify({ type, message, title, cb, options }) {
    if (typeof miniToastr[type] !== 'function') return;
    miniToastr[type](message, title, cb, options);
  }
};

window.NotificationService = NotificationService;
export default NotificationService;
