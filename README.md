 <h1>APP Web from Asafe</h1>
Web app developed with the Next.js React framework.
Additionally, various dependencies such as Module Federation, NextAuth, and Tailwind have been used for a simpler design.
Demonstration of tests performed with Cypress.
 
<h1>Init</h1>
<h3>Install</h3>
<code>npm i
</code>

<h3>Build</h3>
<code>npm run build
</code>

<h3>run</h3>
<code>npm run dev
</code>

   <h2>Web Architecture</h2>
    <p>The application is structured as follows:</p>
    <p>The application is developed with Next.js 15, utilizing Next Router, Next Auth, and Tailwind CSS. For the graphing component, we have employed Chart.js and React Chart.js 2. To start the application, you first need to run npm run build to generate all the static files for Next.js, followed by npm run dev.</p>
 <p>An Index file that allows you to authenticate through user <code> testuser</code> password <code> password1234</code> or Google. When the authentication has been carried out we have a menu with two components:
The structure of the application is divided into several sections. Firstly, in the api/auth part, you will find all the functionality related to logging in. The route to access this is /auth/signin. In the components folder, you will find all the functional components of the application, such as tables, graphs, and pagination.
</p>

<p>The home page leads you to two cards that allow navigation to different sections of the application, whether to view the list of Pokémon obtained from the server or to check data from the Spanish electrical grid.</p>

<p>Test release whit cypress and jest</p>


