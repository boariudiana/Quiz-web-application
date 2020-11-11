## Quiz-web-application
**Quiz-web-application** is a simple quiz app made from scratch with **HTML**, **CSS**, and **JavaScript**. 
It uses **Fetch** to get data from **Open Trivia Db API**, then, handles the resulted Promise, by seeding Promise data, into an array of Question objects.
You can see in the image below the data obtained from the GET request. 



![postman-get-img](https://user-images.githubusercontent.com/59936212/98651679-3aba4900-2343-11eb-8bd5-7b8cc27c405c.png)





Because the GET Request offers an array called **results**, which contains a series of objects, and each object includes a property for the correct answer, and one for incorrect answers, when Promise data were seeded, both correct and incorrect answers were added to new Question property called **choices**.

In the image below you can see how the page looks like before seeding Data.

![quiz-tempate](https://user-images.githubusercontent.com/59936212/98654157-a225c800-2346-11eb-91b0-c97a7286910b.png)



When seeding Data **randomChoices()** function is called to random choices, to display choices randomly.
In the image below you can see how the page looks like after seeding Data.




![Quiz-view](https://user-images.githubusercontent.com/59936212/98651616-270ee280-2343-11eb-9b0d-16596883b408.png)

Every time a choice is clicked, an **Event** occurs. It verifies if the answer is correct, adds it to the score if so, then displays the next Question.
When Quiz ends, results are displayed.

![score](https://user-images.githubusercontent.com/59936212/98657085-26c61580-234a-11eb-9f9c-5b3809b3c53d.png)
