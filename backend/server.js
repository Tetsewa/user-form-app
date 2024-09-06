const express = require('express');
   const { PrismaClient } = require('@prisma/client');
   const cors = require('cors');

   const app = express();
   const prisma = new PrismaClient();

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Routes
   app.post('/api/submit-form', async (req, res) => {
     try {
       const { firstName, lastName, email, phoneNumber, comments } = req.body;

       const newUser = await prisma.user.create({
         data: {
           firstName,
           lastName,
           email,
           phoneNumber,
           comments,
         },
       });

       res.status(201).json(newUser);
     } catch (error) {
       console.error('Error saving user data:', error);
       res.status(500).json({ error: 'An error occurred while saving the data' });
     }
   });

   // Start server
   const PORT = process.env.PORT || 3001;
   // Error handling middleware
   app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
    });
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });