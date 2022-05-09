import React from 'react';

const Blogs = () => {
    return (
        <div className='m-2'>
            <div className='row mb-3 border-bottom '>
                <div className='col-md-6 border-end'>
                    <h5 className='text-success fs-5 bg-light border p-1'>JavaScript vs Node.js</h5>
                    <p> <span className='text-success fs-5 bg-light border p-1'>Javascript:</span> JavaScript is a simple programming language that runs in any browser JavaScript Engine.</p>
                    <p><span className='text-success fs-5 bg-light border p-1'>Node.Js :</span>Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>

                </div>

                <div className='col-md-6 '>
                    <h5 className='text-success fs-5 bg-light border p-1'>When should you use nodejs and when should you use mongodb</h5>
                    <p> <span className='text-success fs-5 bg-light border p-1'>MongoDB:</span> MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.</p>
                    <p><span className='text-success fs-5 bg-light border p-1'>Node.Js :</span>There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>

                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 border-end'>
                    <h5 className='text-success fs-5 bg-light border p-1'>Differences between SQL vs NoSQL</h5>
                    <p> <span className='text-success fs-5 bg-light border p-1'>SQL:</span> SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. </p>
                    <p><span className='text-success fs-5 bg-light border p-1'>No SQL :</span>A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.</p>

                </div>

                <div className='col-md-6 border-end'>
                    <h5 className='text-success fs-5 bg-light border p-1'> What is the purpose of jwt and how does it work?</h5>
                    <p> <span className='text-success fs-5 bg-light border p-1'>JWT:</span>JWT means, JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. </p>

                    <p><span className='text-success fs-5 bg-light border p-1'>How does it work? :</span> JWT contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>

                </div>

            </div>


        </div>
    );
};

export default Blogs;