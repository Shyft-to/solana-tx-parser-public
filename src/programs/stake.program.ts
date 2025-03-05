export declare type StakeProgram = {
	address: "Stake11111111111111111111111111111111111111";
	metadata: {
		name: "stakeProgram";
		version: "1.0.0";
		spec: "0.1.0";
	};
	constants: [];
	errors: [];
	accounts: [];
	types: [
		{
			name: "AuthorizedType";
			type: {
				kind: "struct";
				fields: [
					{
						name: "staker";
						type: "pubkey";
					},
					{
						name: "withdrawer";
						type: "pubkey";
					},
				];
			};
		},
		{
			name: "LockupType";
			type: {
				kind: "struct";
				fields: [
					{
						name: "unixTimestamp";
						type: "u64";
					},
					{
						name: "epoch";
						type: "u64";
					},
					{
						name: "custodian";
						type: "pubkey";
					},
				];
			};
		},
		{
			name: "StakeAuthorizationType";
			type: {
				kind: "struct";
				fields: [
					{
						name: "index";
						type: "u32";
					},
				];
			};
		},
	];
	instructions: [
		{
			discriminator: [0];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: true;
					signer: false;
				},
			];
			name: "initialize";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "authorized";
					type: {
						defined: { generics: []; name: "AuthorizedType" };
					};
				},
				{
					name: "lockup";
					type: {
						defined: { generics: []; name: "COption<LockupType>" };
					};
				},
			];
		},
		{
			discriminator: [1];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: true;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
				{
					name: "custodianPubkey";
					writable: false;
					signer: true;
					optional: true;
				},
			];
			name: "authorize";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "newAuthorized";
					type: "pubkey";
				},
				{
					name: "stakeAuthorizationType";
					type: {
						defined: { generics: []; name: "StakeAuthorizationType" };
					};
				},
			];
		},
		{
			discriminator: [2];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
				{
					name: "clockSysvar";
					writable: true;
					signer: false;
				},
				{
					name: "custodianPubkey";
					writable: false;
					signer: true;
					optional: true;
				},
			];
			name: "authorizeWithSeed";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "newAuthorized";
					type: "pubkey";
				},
				{
					name: "stakeAuthorizationType";
					type: {
						defined: { generics: []; name: "StakeAuthorizationType" };
					};
				},
				{
					name: "authoritySeed";
					type: "string";
				},
				{
					name: "authorityOwner";
					type: "pubkey";
				},
			];
		},
		{
			discriminator: [3];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: true;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
			];
			name: "deactivate";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "stakePubkey";
					type: "pubkey";
				},
				{
					name: "authorizedPubkey";
					type: "pubkey";
				},
			];
		},
		{
			discriminator: [4];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "votePubkey";
					writable: false;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: false;
					signer: false;
				},
				{
					name: "sysvarStakeHistory";
					writable: false;
					signer: false;
				},
				{
					name: "stakeConfig";
					writable: false;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
			];
			name: "delegate";
			args: [
				{
					name: "index";
					type: "u32";
				},
			];
		},
		{
			discriminator: [5];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "sourceStakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: false;
					signer: false;
				},
				{
					name: "sysvarStakeHistory";
					writable: false;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
			];
			name: "merge";
			args: [
				{
					name: "index";
					type: "u32";
				},
			];
		},
		{
			discriminator: [6];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "splitStakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
			];
			name: "split";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "lamports";
					type: "u64";
				},
			];
		},
		{
			discriminator: [7];
			accounts: [
				{
					name: "stakePubkey";
					writable: true;
					signer: false;
				},
				{
					name: "toPubkey";
					writable: true;
					signer: false;
				},
				{
					name: "clockSysvar";
					writable: false;
					signer: false;
				},
				{
					name: "sysvarStakeHistory";
					writable: false;
					signer: false;
				},
				{
					name: "authorizedPubkey";
					writable: false;
					signer: true;
				},
				{
					name: "custodianPubkey";
					writable: false;
					signer: true;
					optional: true;
				},
			];
			name: "withdraw";
			args: [
				{
					name: "index";
					type: "u32";
				},
				{
					name: "lamports";
					type: "u64";
				},
			];
		},
	];
};
