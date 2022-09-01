const router = require("express").Router();

router.post("/auth", async (req, res) => {
	try
	{
		res.status(200).send("[+] Authenticated successfully . . .");	
	}
	catch (error) 
	{
		res.status(400).send(error);
	}
});

module.exports = router;
