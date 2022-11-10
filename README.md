# n00trals.xyz

This is the source of [https://n00trals.xyz](https://n00trals.xyz).

### Adapting for other clubs

This was built to work mostly out of the box with Netlify. Otherwise you'll need familiarity with building Javascript packages. We also recommend picking up a cheap domain at [Namecheap](https://www.namecheap.com/).

1. Choose "Fork > Create a new fork" from the button in the top right.
2. In your forked repository make the following changes and commit them.
   - Copy [example.config.json](./example.config.json) to `config.json` and update it with your club's details and traits.

#### If you're using Netlify

1. Create a new [Netlify](https://www.netlify.com/) site and import an existing project.
2. Connect to Github.
3. Choose your forked repository.
4. Update the settings as necessary.
   - Branch to deploy: main
   - Build command: yarn build
   - Publish directory: build
5. Click "Show advanced" and add the following environmental variable
   - Key: `PUBLIC_URL`
   - Scopes: All scopes
   - Values: Different value for each deploy context
     - Production: the URL of your club (eg. https://n00trals.xyz or https://n00trals.netlify.app/)
     - Local development: `http://localhost:8443`
     - Add a branch value
       - Branch name: `development`
       - Value for branch development: the development URL of your club (eg. https://development--n00trals.netlify.app/)
6. Click "Deploy site".


#### Without Netlify

* Create `.env` and `.env.development` files based on [example.env](./example.env).
* Run `yarn install` to install all the dependencies.
* Run `yarn generate-members` to generate your member list based on the traits.
* Run `yarn build` to build the production app to `./build`.
* Run `yarn start-express-dev` to run the development app on [http://localhost:8443/](http://localhost:8443/).
