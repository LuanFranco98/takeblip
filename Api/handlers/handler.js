const handler = (controller) => {
  return async (req, res, next) => {
    try {
      const response = await controller.list(req)
      res.status(response.statusCode).json(response.body)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = { handler }
