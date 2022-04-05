const errorGeneral = message => {
  return {
    data: {
      error: {
        message:
          message || '☹ Ha Ocurrido un error, por favor intente nuevamente.',
      },
    },
  };
};

export const handleError = err => {
  if (err.response) {
    if (err.response.status >= 500) {
      return errorGeneral(err.response.data?.error?.message);
    }
    return err.response;
  }
  if (err.request) {
    return errorGeneral(err.request.response?.error?.message);
  }
};
