export const getCompanyByID = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findById(id);

    res.status(200);
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}