import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

import { TextLoader } from "langchain/document_loaders/fs/text";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";


dotenv.config();


const loader = new TextLoader("data/info.txt");
const docs = await loader.load();

// Load the docs into the vector store
const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );
  

// Search for the most similar document
const resultOne = await vectorStore.similaritySearch("Berapa Umur Jerry ", 1);

vectorStore.quer

console.log(resultOne);

// const template = "{_prompt} ? "
// const promptTemplate = new PromptTemplate({ 
//     template: template,
//     inputVariables: ["_prompt"],
// });


// const model = new OpenAI({
//     temperature : 0.9
// });

// const chain = new LLMChain({
//     llm : model,
//     prompt: promptTemplate,
// });

// const res = await chain.call({
//     _prompt : "Jelaskan tentang machine learning dalam bahasa yang mudah dimengerti oleh seorang anak kecil",
// });

// console.log(res);