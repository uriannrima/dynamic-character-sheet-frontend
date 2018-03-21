import miniToastr from 'mini-toastr';

miniToastr.init({
  timeout: 6000
});

export const Types = {
  Error: 'error',
  Warning: 'warn',
  Success: 'success',
  Info: 'info'
}

const NotificationService = {
  async notify({ type, message, title, timeout, cb, config = {} }) {
    if (typeof miniToastr[type] !== 'function') return;
    miniToastr[type](message, title, timeout, cb, config);
  },
  async error({ message, title = 'Error:', timeout, cb, config = {} } = {}) {
    miniToastr[Types.Error](message, title, timeout, cb, config);
  },
  async info({ message, title = 'Info:', timeout, cb, config = {} } = {}) {
    miniToastr[Types.Info](message, title, timeout, cb, config);
  },
  async warning({ message, title = 'Warning:', timeout, cb, config = {} } = {}) {
    miniToastr[Types.Warning](message, title, timeout, cb, config);
  },
  async success({ message, title = 'Success:', timeout, cb, config = {} } = {}) {
    miniToastr[Types.Success](message, title, timeout, cb, config);
  }
};

window.NotificationService = NotificationService;
export default NotificationService;
