# Journal Entry

I want a web portal for uploading my research documents to the web for showcase to prospective employers and potentially for research programs and work done in academics. 

## Phase 0: Initial build

The first phase, is a portal that runs on my local device and stores the data in Azure. I can keep this data stored here while I work out the portal that can be authenticated against and used by anyone on the web. It might be worth adding some admin functionality into the external web page as well for hiding and showing entries for example.

### CRUD API Creation

I want a CRUD API for the dev journal entries. This API can be leveraged by the creation and the external web portal. This can be deployed to Azure as a function app with secured access and tokenization.

### Data Input

I want to be able to input HTML, CSS, and JS in the form of react in a similar way that Code Pen handles their pens. It might technically introduce some security vulnerabilities, but I can work through that process as well. I should validate the code somehow before it's rendered on the page. 

I would lik

### Data Preview

Similarly to the way Code Pen handles their input, I want to be able to see what will actually be displayed in the website. This means the code needs to be complied in the browser for rendering. This Udemy tutorial should be my path towards this.

https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project

### Data Persistance

The data being persisted here should be the pre-compiled code that can be modified easier than the compiled version. The outward facing portal should leverage the same preview render code to display this on the page.

I'm not sure if we want to store this data in an Relational Database or NoSQL Database. The data would lend itself to relational and it is the form I am most familiar with, but it might be a good chance to explore these options. I think for this I will stick to the RDB as it makes the most sense for the data being structured. 

#### Local Dev Storage

I want a similar storage for local testing that won't impact the cloud data. I think PostGres would work fine.

#### Cloud Storage

For the cloud, I need a matching resource that can persist data that will be shown on the external page. This means we need some level of data mapping that can be RDB agnostic. This could or normally would be where I would use Hibernate, but it will depend on the function app code chosen.

## Phase 1

The next phase will be publishing these documents to showcase some of the work I have been doing. There sill be a large amount of overlap between the code bases so it will be good to have a library to share around. I also need to be able to interact with the data source from my local machine to DB in Azure. I won't need to access this from anywhere other than from my local in Phase 0, but I will moving forward.

### Pull Out Library

The UI code base will use the same components and DAL layer code for interacting with the CRUD API. Once I outline the code needed by both applications, I can pull them all into a shared library and publish this to NPM.

### Deploy API

A deployed API will allow me to make CRUD changes to the entries from anywhere. I want to leverage Function Apps, and I would like to write them in Python. I can make those determinations as we move down the line.

## Phase 2