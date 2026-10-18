import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { emailDescription } from './resources/email';

export class Groundmail implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Groundmail',
		name: 'groundmail',
		icon: { light: 'file:../../icons/groundmail.light.svg', dark: 'file:../../icons/groundmail.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Send transactional email with Groundmail',
		defaults: {
			name: 'Groundmail',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'groundmailApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.baseUrl}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Email',
						value: 'email',
					},
				],
				default: 'email',
			},
			...emailDescription,
		],
	};
}
