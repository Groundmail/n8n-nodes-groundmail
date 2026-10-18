import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GroundmailApi implements ICredentialType {
	name = 'groundmailApi';

	displayName = 'Groundmail API';

	icon: Icon = { light: 'file:../icons/groundmail.light.svg', dark: 'file:../icons/groundmail.dark.svg' };

	documentationUrl = 'https://docs.groundmail.dev/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Groundmail API key (starts with gm_)',
		},
		{
			displayName: 'API Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.groundmail.dev',
			description: 'Override only for custom deployments. Default is the production API.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/emails',
			method: 'GET',
			qs: {
				limit: 1,
			},
		},
	};
}