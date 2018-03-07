import miniToastr from 'mini-toastr';

miniToastr.init();

const NotificationService = {
  async notify({ type, message, title, timeout, cb, options = {} }) {
    if (typeof miniToastr[type] !== 'function') return;
    miniToastr[type](message, title, timeout, cb, options);
  }
};

window.NotificationService = NotificationService;
export default NotificationService;
