import express from "express";
import {getSingleJobController, postJobController, updateJobController, getJobController, getActiveJobController, jobDeleteController, getUserJobController, getUserActiveJobController, FilterQueryController, SearchQueryController, getHomepageJobsController, updateJobStatusController, searchJobsController} from '../controller/jobController.js'
import { requireSignIn, isAdmin, isRecruiter, isRecruiterorAdmin, isApplicantorAdmin } from "../middleware/Auth.js";

//router object
const router=express.Router();
router.use(express.json());

//Post Jobs
router.post("/postjob", requireSignIn, isRecruiterorAdmin, postJobController);

//Update Job
router.put("/updatejob/:id", requireSignIn, isRecruiterorAdmin, updateJobController);

//Get All Jobs
router.get("/getjob", requireSignIn, isRecruiterorAdmin, getJobController);

//Get Single Job
router.get("/getSingleJob/:id", requireSignIn, getSingleJobController);

//Get Active Jobs
router.get("/getActiveJobs", requireSignIn, getActiveJobController);

//Get Active Jobs for All
router.get("/getHomepageJobs", getHomepageJobsController);

//Update jobStatus attribute
router.put("/changeJobStatus/:id", requireSignIn, isRecruiterorAdmin, updateJobStatusController);

//Delete Job
router.put("/deletejob/:id", requireSignIn, isRecruiterorAdmin, jobDeleteController);

//Get jobs by a specific user
router.get("/userJob/:id", requireSignIn, isRecruiterorAdmin, getUserJobController);

//Get active jobs by a specific user
router.get("/userActiveJob/:id", requireSignIn, isRecruiterorAdmin, getUserActiveJobController);

//Filter Jobs
router.get("/filter", requireSignIn, isApplicantorAdmin, FilterQueryController);

//Search
router.get("/search", requireSignIn, isApplicantorAdmin, SearchQueryController);

//Search filter API
router.post("/searchJobs", requireSignIn, isApplicantorAdmin, searchJobsController);

export default router;

