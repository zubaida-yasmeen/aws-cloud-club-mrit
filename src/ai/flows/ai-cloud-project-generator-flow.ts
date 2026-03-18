'use server';
/**
 * @fileOverview An AI agent that generates cloud project ideas based on user-selected AWS services and interests.
 *
 * - generateCloudProjectIdea - A function that handles the generation of a cloud project idea.
 * - AiCloudProjectGeneratorInput - The input type for the generateCloudProjectIdea function.
 * - AiCloudProjectGeneratorOutput - The return type for the generateCloudProjectIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCloudProjectGeneratorInputSchema = z.object({
  awsServices: z
    .array(z.string())
    .describe('List of AWS services to include in the project idea (e.g., S3, EC2, Lambda, Bedrock).'),
  interestAreas: z
    .array(z.string())
    .describe('List of interest areas for the project idea (e.g., AI, Web Dev, Security, Data).'),
});
export type AiCloudProjectGeneratorInput = z.infer<typeof AiCloudProjectGeneratorInputSchema>;

const AiCloudProjectGeneratorOutputSchema = z.object({
  projectTitle: z.string().describe('A catchy and descriptive title for the cloud project.'),
  projectDescription: z
    .string()
    .describe('A detailed description of the project, including its purpose and key features.'),
  techStack: z.array(z.string()).describe('A list of technologies and AWS services used in the project.'),
  implementationSteps: z.array(z.string()).describe('A step-by-step guide to implement the project.'),
});
export type AiCloudProjectGeneratorOutput = z.infer<typeof AiCloudProjectGeneratorOutputSchema>;

const prompt = ai.definePrompt({
  name: 'generateCloudProjectPrompt',
  input: {schema: AiCloudProjectGeneratorInputSchema},
  output: {schema: AiCloudProjectGeneratorOutputSchema},
  prompt: `You are an expert cloud architect and project idea generator. Your task is to come up with a unique and inspiring cloud project idea for students, based on their chosen AWS services and areas of interest.

Generate a project title, a detailed description, a list of technologies/AWS services to be used, and clear step-by-step implementation instructions.

AWS Services to include:
{{#if awsServices}}
  {{#each awsServices}}
  - {{{this}}}
  {{/each}}
{{else}}
  (No specific AWS services provided, use common ones like EC2, S3, Lambda, DynamoDB)
{{/if}}

Areas of Interest:
{{#if interestAreas}}
  {{#each interestAreas}}
  - {{{this}}}
  {{/each}}
{{else}}
  (No specific interest areas provided, focus on general cloud development or AI/ML)
{{/if}}

Ensure the project is suitable for students, encouraging learning and hands-on experience. The implementation steps should be actionable and cover the main phases of development.

Provide the output in a JSON format matching the following structure and descriptions:
${JSON.stringify(
    AiCloudProjectGeneratorOutputSchema.parse({
      projectTitle: 'Example Project Title',
      projectDescription: 'Example project description.',
      techStack: ['AWS S3', 'AWS Lambda', 'Python'],
      implementationSteps: ['Step 1: Setup AWS S3 bucket.', 'Step 2: Write Lambda function.', 'Step 3: Deploy.'],
    }),
    null,
    2
  )}
`,
});

const generateCloudProjectIdeaFlow = ai.defineFlow(
  {
    name: 'generateCloudProjectIdeaFlow',
    inputSchema: AiCloudProjectGeneratorInputSchema,
    outputSchema: AiCloudProjectGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function generateCloudProjectIdea(
  input: AiCloudProjectGeneratorInput
): Promise<AiCloudProjectGeneratorOutput> {
  return generateCloudProjectIdeaFlow(input);
}
