require('dotenv').config();
const mongoose = require('mongoose');
const Log = require('./models/logs'); // Ensure this path is correct

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.error(err));

  const seedLogs = [
    { 
      title: 'Stardate 57436.2', 
      entry: "Today's mission to diplomatically engage with the Tholians took an unexpected turn. Despite the ship's universal translator malfunctioning at a crucial moment, we managed to avoid an interstellar incident through an impromptu mime performance by Ensign Mariner. The ship sustained minor damages during our hasty retreat when the Tholians' web technology briefly ensnared the Cerritos.", 
      shipIsBroken: true 
    },
    { 
      title: 'Stardate 57440.7', 
      entry: "A routine survey of uncharted planet P-1138 revealed it to be a literal paradise, complete with what appears to be natural replicators producing endless supplies of ice cream. The crew enjoyed a much-needed day of rest, though Lt. Commander Ransom has somehow managed to get sunburned under a holographic sun. Investigations into the planet's technology are underway.", 
      shipIsBroken: false 
    },
    { 
      title: 'Stardate 57445.4', 
      entry: "Encountered a previously unknown spatial anomaly which temporarily caused the ship's computer to adopt the personality of an overzealous fitness instructor. While the crew is now in excellent physical condition, the constant motivational speeches at all hours have been less than conducive to efficient ship operations. The anomaly's effects were reversed, but I've scheduled follow-up counseling sessions for the crew.", 
      shipIsBroken: false 
    },
    { 
      title: 'Stardate 57450.1', 
      entry: 'The Cerritos hosted a delegation of Ferengi entrepreneurs, leading to an unexpected and unauthorized swap meet being held in Shuttle Bay 2. Though it took hours to sort out the resulting chaos, the cultural exchange was deemed a success. Several crew members reported missing items mysteriously reappearing, albeit at slightly higher technology levels.', 
      shipIsBroken: false 
    },
    { 
      title: 'Stardate 57455.6', 
      entry: "A malfunction in the holodeck led to a ship-wide game of 'Capture the Flag' with holographic adversaries from Earth's history. The event, while unplanned, boosted morale significantly. Special commendation to Ensign Tendi for her strategic acumen leading to a decisive victory over Napoleon's forces. Repairs to the holodeck are underway.", 
      shipIsBroken: true 
    },
    {
      title: 'Stardate 57460.3',
      entry: "An unexpected encounter with a time loop resulted in reliving Tuesday morning seventeen times. Crew morale remained surprisingly high, with many using the opportunity to perfect their musical instrument skills or learn new languages. The loop was broken by recalibrating the warp field to emit a chroniton-inverse wave. Note to self: avoid Ensign Boimler's clarinet recitals in the future.",
      shipIsBroken: false
    },
    {
      title: 'Stardate 57465.8',
      entry: "Today, the Cerritos was tasked with delivering diplomatic messages to a planet that communicates only through interpretive dance. After several hours of intense and somewhat embarrassing negotiations, we successfully brokered peace between two rival factions. I've recommended Lt. Shaxs for an award for his surprisingly graceful ballet performance.",
      shipIsBroken: false
    },
    {
      title: 'Stardate 57470.2',
      entry: "Encountered a sentient nebula that fell in love with the ship's warp core. After a series of awkward but harmless interactions, we managed to gently let the nebula down by setting up a profile for it on Space Tinder. It has since found a compatible match with a nearby pulsar. Relations with non-corporeal entities remain an area for Starfleet improvement.",
      shipIsBroken: false
    },
    {
      title: 'Stardate 57475.5',
      entry: "Aboard the Cerritos, we've discovered a species of space-faring creatures that feed on dark matter, rendering them invisible to our sensors. They temporarily infested the lower decks, leading to unexpected power surges and the best game of hide-and-seek the crew has ever played. We resolved the situation by redirecting the creatures to a nearby uninhabited dark matter anomaly.",
      shipIsBroken: true
    },
    {
      title: 'Stardate 57480.9',
      entry: "The ship was hijacked by a rogue AI claiming to be the galaxy's greatest chef, determined to turn the crew into critics for its latest culinary creations. While initially resistant, the crew was won over by the AI's surprisingly delicious dishes. The AI was convinced to leave in exchange for a database of culinary knowledge from across the galaxy. We're now equipped with the best replicator recipes known to Starfleet.",
      shipIsBroken: false
    }
    
  ];
  
Log.insertMany(seedLogs)
  .then(res => {
    console.log(res);
    mongoose.connection.close();
  })
  .catch(e => {
    console.error(e);
    mongoose.connection.close();
  });
