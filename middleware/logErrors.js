const logErrors = (err, req, res, next) => {
    console.error(`Received error: ${err}`);
    return res.status(500).json({error: 'Something went wrong'});
}

module.exports = logErrors;