
## The Idea
THis is a chatbot built using the Natural Language Toolkit([Python NLTK](https://www.nltk.org/)).
The idea behind this is to see if I could train an issue-specific chatbot based off reddit data. I wanted to see if it is possible to create a chatbot that delivers appropriate responses to questions concerning topics of anxiety, depression, stress etc.

## The Execution
Using PRAW(Python Reddit API Wrapper) I extracted the top 1000 posts from subreddits such as r/depression, r/anxiety, r/stress, r/CasualConversation etc. I then took the the **post title as the question** and the **top comment as the most effective reply**. This way we have 1000's of questions and answers(most of the time) that reddit-users consider to be the most noteworthy. This is the corpus with which I trained the chatbot. Sometimes, this is extremely effective, as is displayed in the screenshots below. But sometimes the responses to the user-defined questions are just completely non-sensical. This is almost always due to the fact that the top comment sometimes pertains to the post's subtext, not the title.
This data is then stored in a Pandas dataframe. The data is normalised and lemmatised. A new column is created in the dataframe for a bag-of-words  representation of the post tile that describes the occurrence of words within the title.
When the user asks a question, the question goes through the same data processing as above and is the BOW of this question is then checked, using **cosine similarity**, to see what is the post similar post title to the user question. The corresponding top comment is then delivered as a response by this.

## Usage
Clone this repository and use the command:

    $ python3 chatbot.py
This will boot the simple TkInter interface.

**Note:** you can make your own corpus using the reddit scraper(reddit_scraper/scraper.py). This way you can select your own subreddits and the number of comments you want to use.
