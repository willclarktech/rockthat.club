/*
Let's import all our files here.
*/

// general business logic of this customization
import "./callbacks.js";
import "./emails.js";
import "./custom_fields.js";
import "./i18n.js";
import "./groups.js";
import "./fragments.js";

// custom components
import "./components/CustomLogo.jsx";
import "./components/CustomNewsletter.jsx";
import "./components/CustomPostsItem.jsx";
import "./components/MyCustomPage.jsx";
import "./components/MyPostsPage.jsx";
import "./components/MyFooter.jsx";

// custom routes
import "./routes.jsx";

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  // requireEmailVerification: true,
});
