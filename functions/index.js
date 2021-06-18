const functions = require('firebase-functions')
const admin = require('firebase-admin')
const recipeScraper = require('recipe-scraper')
admin.initializeApp()

exports.getRecipe = functions.https.onRequest(async (req, res) => {
  try {
    functions.logger.log(recipeScraper)
    const recipe = await recipeScraper(
      'https://www.bonappetit.com/recipe/tomato-and-parmesan-risotto'
    )
    const writeResult = await admin
      .firestore()
      .collection('recipes')
      .add({ details: recipe })
    res.json({ result: `New Message with ID: ${writeResult.id} added.` })
  } catch (e) {
    functions.logger.log(e.message)
  }
})

exports.makeUppercase = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap, context) => {
    functions.logger.log('Logging')
    const original = snap.data().original
    functions.logger.log('Uppercasing', context.params.documentId, original)
    const uppercase = original.toUpperCase()
    return snap.ref.set({ uppercase }, { merge: true })
  })
