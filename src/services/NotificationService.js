import miniToastr from 'mini-toastr';

miniToastr.init();

const NotificationService = {
  async notify({ type, message, title, timeout, cb, config = {} }) {
    if (typeof miniToastr[type] !== 'function') return;
    miniToastr[type](message, title, timeout, cb, config);
  }
};

window.NotificationService = NotificationService;
export default NotificationService;
