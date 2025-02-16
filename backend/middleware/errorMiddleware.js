const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  

  if(err.name === 'CastError' && err.kind === 'ObjectId') {
   statusCode = 404;
   res.status(statusCode);
   message = 'Resource not found';
  } else {
    res.status(500).json({ message: 'Server Error' });
  }

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });


}

export  { notFound, errorHandler };