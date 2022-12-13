async function validation (req, res, validationSchema) {
    console.log('run user validation');
  
  try {
    console.log('validate schema');
    await validationSchema.validate(req.body);
    return true;
  } catch (error) {
    console.log('validation error: ', error);
    return false;
  }
};

module.exports = validation;
