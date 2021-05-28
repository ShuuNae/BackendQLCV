require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

const userRouter = require("./api/users/user.router");
const organizationRouter = require("./api/organizations/organization.router");
const positionRouter = require("./api/positions/position.router");
const departmentRouter = require("./api/departments/department.router");
const documentTypesRouter = require("./api/documentTypes/documentTypes.router");
const formRouter = require("./api/forms/forms.router");
const dispatchesRoute = require("./api/dispatches/dispatches.router");
const arriveRoute = require("./api/arrives/arrives.router");
const internalRoute = require("./api/internals/internals.router");
const approveRoute = require("./api/approves/approve.router");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use("/api/users", userRouter);
app.use("/api/organizations", organizationRouter);
app.use("/api/positions", positionRouter);
app.use("/api/departments", departmentRouter);
app.use("/api/documentTypes", documentTypesRouter);
app.use("/api/forms", formRouter);
app.use("/api/dispatches", dispatchesRoute);
app.use("/api/arrives", arriveRoute);
app.use("/api/internals", internalRoute);
app.use("/api/approves", approveRoute);

app.listen(process.env.PORT || process.env.APP_PORT, () => {
  console.log("Server up and running");
});
