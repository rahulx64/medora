// api for adding docotors by admin
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;





  } catch (error) {
    console.log("Error in adding doctor:", error.message);
  }
};

export {addDoctor};
