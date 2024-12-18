# 2048 Game – CI/CD Final Project

Project Overview
Welcome to the 2048 Game CI/CD Implementation Project! This project focuses on automating the development, testing, and deployment process of the popular 2048 game using GitHub Actions for CI/CD and deploying it to AWS EC2 instances.
Our aim is to integrate modern DevOps practices into a fun, lightweight web application while ensuring a smooth and reliable deployment pipeline. 

## Team Members
- Rizfandino Ramadhan (5026211051)
- Rayhan Zamzam Fadilla (5026211052)
- Akhmad Nabiel Wicaksono (5026211196)


## Manual Guide
Each time a developer push and pull from and to this repository to the main Master branch, GitHub Actions will run a virtual environment to make sure there are no collisions and error. If successful, a workflow for automated deployment are in place. This workflow will ssh into the aws server, create a docker image, and host. The IP Address to access the live site is http://13.229.209.76/.

Link our manual guidelines documents is linked here: [User Manual](https://docs.google.com/document/d/1qhW9yyjJoea8e7mWbE3X4jwRzx0k2uAN6rBa25n79es/edit)

## What is 2048?
2048 is a fun sliding tile puzzle game where players combine numbers to reach the coveted 2048 tile. It’s open-source and widely recognized as a simple yet addictive project to experiment with modern software practices.
For this project, we forked the original repository (https://github.com/gabrielecirulli/2048) to demonstrate the deployment pipeline and infrastructure automation.

## Why CI/CD?
Continuous Integration and Continuous Deployment (CI/CD) allows for:
	
 - Automation of repetitive tasks like testing and deployment.
- Faster development cycles with frequent updates.
- Reliability by minimizing human error.
- Scalability to support future project enhancements.
   
This project demonstrates how CI/CD principles can be applied to a simple web-based game.

## Project Objectives
1. Implement CI/CD using GitHub Actions
   	Automate the build, test, and deployment pipeline directly from the GitHub repository.
2. Deploy the 2048 Game to AWS EC2
   	Use AWS EC2 instances to host the game instead of the default GitHub Pages.

## Key Features of the Pipeline
1. Build and Test Phase
	- Use GitHub Actions to ensure that the application is built correctly and passes basic tests.
	- Automatically triggered on every push or pull request to the main branch.
2. Deployment to AWS EC2
  	- Set up an Ubuntu-based EC2 instance to serve the game using NGINX or Apache.
	- Automate file transfer and deployment with GitHub Actions.
3. Monitoring and Logging
   	- Monitor deployment success and capture logs for debugging.
