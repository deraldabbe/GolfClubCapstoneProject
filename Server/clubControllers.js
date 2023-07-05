const Club = require('../models/Club');


exports.getClubs = async (req, res) => {
  try {
    const clubs = await Club.findAll();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.createClub = async (req, res) => {
  try {
    const { name, distance, gender, skillLevel } = req.body;
    const club = await Club.create({ name, distance, gender, skillLevel });
    res.status(201).json(club);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateClub = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, distance, gender, skillLevel } = req.body;
    await Club.update({ name, distance, gender, skillLevel }, { where: { id } });
    const updatedClub = await Club.findByPk(id);
    res.json(updatedClub);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteClub = async (req, res) => {
  try {
    const { id } = req.params;
    await Club.destroy({ where: { id } });
    res.json({ message: 'Club deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

