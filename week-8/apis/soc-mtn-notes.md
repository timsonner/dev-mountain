# Social Mountain Notes  
1. Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?  
POST request expects a JSON body with a text object.
2. What data type does the GET request return?  
JSON.
3. What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )  
<https://practiceapi.devmountain.com/api/posts/?id=555>
4. List the possible response codes from the GET request at ‘/posts/filter’  
200: returns an array of results
409: request query is missing required text property
5. Create a post whose text is your name, record the URL and body here:  
<https://practiceapi.devmountain.com/api/posts>
```
{
    "id": 975,
    "text": "Don't forget to change your POST request body type to JSON. - Tim",
    "date": "09 Aug 2022"
}
```
6. What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?  
<https://practiceapi.devmountain.com/api/posts?id=975>  
```
{
    "text": "Default color"
}
```
7. What is the URL to get posts that contain the text “blue”?  
<https://practiceapi.devmountain.com/api/posts/filter?text=blue>
8. Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)  
application/json; charset=utf-8
9. What would cause a PUT request to return a 409 status?  
Request was missing a query parameter in the URL or a text field in the request body. "Request was missing req.query.id or req.body.text"
10. What happens if you try to send a query in the GET request URL? Why do you get that response?  
I don't understand this question. Like a 200 status code? It's the default behavior. 
