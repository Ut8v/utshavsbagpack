import Chart from './chart';
import ReactMarkdown from 'react-markdown';
import '../scss/blog.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDisplay = () => {
  const blogContent = `

  # My Thought Process 

I have always been passionate about technology and enjoy building projects to learn new technologies. Recently, I became fascinated by the rise of AI and decided to build my own chatbot. Initially, I used the Node-NLP library. While it worked fine, it had a limitation: the chatbot could only respond to questions if they exactly matched the ones in my dataset.

## Adding a Fallback

To improve my chatbot, I decided to implement a fallback mechanism using TensorFlow. This would allow the chatbot to handle questions even if they weren't an exact match in the dataset.

## Using TensorFlow and '@tensorflow-models/universal-sentence-encoder' Library

Initially, I only had a function to get the user input, recognize their intent, and respond. However, this approach had a major limitation: I needed to load the intent recognition process for every input. This overloaded the server and slowed down the response time significantly. To fix this, I created a shared file that runs once, storing precomputed intent data. This allowed the server to retrieve responses without reloading intent recognition, improving efficiency.

### Explanation of the Functions

### 1. **loadModel Function**:
This function ensures that the TensorFlow Universal Sentence Encoder model is only loaded once. By caching the model, we avoid the overhead of loading the model multiple times, which would slow down the chatbot.

- **Why it's important**: Loading the model is a resource-intensive task. This function ensures the model is only loaded when necessary, reducing server load.

### 2. **Recognize Intent Function**:
This function compares the user's input with precomputed examples (intent embeddings). The chatbot uses this comparison to find the best matching intent from the stored dataset and respond accordingly.

- **How it works**: It first embeds the user's input and compares it with precomputed intent embeddings using matrix multiplication. The intent with the highest matching score is recognized as the user's intent.

- **Improvement**: Initially, I was running the intent recognition process for each input. Now, by precomputing the intent embeddings and storing them in a shared file, the chatbot can recognize the user's intent much faster. This reduced the load on the server and improved response times.

### 3. **Load Precomputed Embeddings Function**:
This function precomputes the embeddings for all intents and stores them. These embeddings are then used by the chatbot to match user inputs with the precomputed data.

- **Why it's important**: Precomputing intent embeddings allows the chatbot to quickly match the user's input with predefined intents, instead of recalculating embeddings for every input. This speeds up the entire process.

This optimization helped improve the chatbot's performance, reducing the server's workload.
- There are certainly more efficient ways to implement this process, but since this is my first chatbot development, I'm excited to continue learning and improving this bot in the future.
`
  return (
    <div className="blog">
      <ReactMarkdown className= "content">{blogContent}</ReactMarkdown>
      <Chart />
    </div>
  );
};

export default BlogDisplay;