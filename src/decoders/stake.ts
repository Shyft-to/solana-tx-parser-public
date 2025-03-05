import { StakeInstruction, TransactionInstruction } from "@solana/web3.js";
import { BN } from "bn.js";

import { ParsedIdlInstruction, ParsedInstruction } from "../interfaces";
import { StakeProgram } from "../programs/stake.program";

export function decodeStakeInstruction(instruction: TransactionInstruction): ParsedInstruction<StakeProgram> {
	const type = StakeInstruction.decodeInstructionType(instruction);
	let parsed: ParsedIdlInstruction<StakeProgram> | null;
	switch (type) {
		case "Initialize": {
			const decoded = StakeInstruction.decodeInitialize(instruction);
			parsed = {
				name: "initialize",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
				],
				args: {
					index: 0,
					authorized: decoded.authorized,
					lockup: decoded.lockup,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "initialize">;
			break;
		}
		case "Authorize": {
			const decoded = StakeInstruction.decodeAuthorize(instruction);
			parsed = {
				name: "authorize",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
					{
						name: "custodianPubkey",
						pubkey: instruction.keys[3].pubkey,
						isSigner: instruction.keys[3].isSigner,
						isWritable: instruction.keys[3].isWritable,
					},
				],
				args: {
					index: 1,
					newAuthorized: decoded.newAuthorizedPubkey,
					stakeAuthorizationType: decoded.stakeAuthorizationType,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "authorize">;
			break;
		}
		case "AuthorizeWithSeed": {
			const decoded = StakeInstruction.decodeAuthorizeWithSeed(instruction);
			parsed = {
				name: "authorizeWithSeed",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
					{
						name: "custodianPubkey",
						pubkey: instruction.keys[3].pubkey,
						isSigner: instruction.keys[3].isSigner,
						isWritable: instruction.keys[3].isWritable,
					},
				],
				args: {
					index: 2,
					newAuthorized: decoded.newAuthorizedPubkey,
					stakeAuthorizationType: decoded.stakeAuthorizationType,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "authorizeWithSeed">;
			break;
		}
		case "Deactivate": {
			const decoded = StakeInstruction.decodeDeactivate(instruction);
			parsed = {
				name: "deactivate",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
				],
				args: {
					index: 3,
					stakePubkey: decoded.stakePubkey,
					authorizedPubkey: decoded.authorizedPubkey,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "deactivate">;
			break;
		}
		case "Delegate": {
			const decoded = StakeInstruction.decodeDelegate(instruction);
			parsed = {
				name: "delegate",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "votePubkey",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
					{
						name: "sysvarStakeHistory",
						pubkey: instruction.keys[3].pubkey,
						isSigner: instruction.keys[3].isSigner,
						isWritable: instruction.keys[3].isWritable,
					},
					{
						name: "stakeConfig",
						pubkey: instruction.keys[4].pubkey,
						isSigner: instruction.keys[4].isSigner,
						isWritable: instruction.keys[4].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[5].pubkey,
						isSigner: instruction.keys[5].isSigner,
						isWritable: instruction.keys[5].isWritable,
					},
				],
				args: {
					index: 4,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "delegate">;
			break;
		}
		case "Merge": {
			const decoded = StakeInstruction.decodeMerge(instruction);
			parsed = {
				name: "merge",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "sourceStakePubkey",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
					{
						name: "sysvarStakeHistory",
						pubkey: instruction.keys[3].pubkey,
						isSigner: instruction.keys[3].isSigner,
						isWritable: instruction.keys[3].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[4].pubkey,
						isSigner: instruction.keys[4].isSigner,
						isWritable: instruction.keys[4].isWritable,
					},
				],
				args: {
					index: 5,
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "merge">;
			break;
		}
		case "Split": {
			const decoded = StakeInstruction.decodeSplit(instruction);
			parsed = {
				name: "split",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "splitStakePubkey",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
				],
				args: {
					index: 6,
					lamports: new BN(decoded.lamports),
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "split">;
			break;
		}
		case "Withdraw": {
			const decoded = StakeInstruction.decodeWithdraw(instruction);
			parsed = {
				name: "withdraw",
				accounts: [
					{
						name: "stakePubkey",
						pubkey: instruction.keys[0].pubkey,
						isSigner: instruction.keys[0].isSigner,
						isWritable: instruction.keys[0].isWritable,
					},
					{
						name: "toPubkey",
						pubkey: instruction.keys[1].pubkey,
						isSigner: instruction.keys[1].isSigner,
						isWritable: instruction.keys[1].isWritable,
					},
					{
						name: "clockSysvar",
						pubkey: instruction.keys[2].pubkey,
						isSigner: instruction.keys[2].isSigner,
						isWritable: instruction.keys[2].isWritable,
					},
					{
						name: "sysvarStakeHistory",
						pubkey: instruction.keys[3].pubkey,
						isSigner: instruction.keys[3].isSigner,
						isWritable: instruction.keys[3].isWritable,
					},
					{
						name: "authorizedPubkey",
						pubkey: instruction.keys[4].pubkey,
						isSigner: instruction.keys[4].isSigner,
						isWritable: instruction.keys[4].isWritable,
					},
					{
						name: "custodianPubkey",
						pubkey: instruction.keys[5].pubkey,
						isSigner: instruction.keys[5].isSigner,
						isWritable: instruction.keys[5].isWritable,
					},
				],
				args: {
					index: 7,
					lamports: new BN(decoded.lamports),
				},
				programId: instruction.programId,
			} as ParsedIdlInstruction<StakeProgram, "withdraw">;
			break;
		}
		default: {
			parsed = null;
		}
	}

	return parsed
		? parsed
		: {
				programId: instruction.programId,
				name: "unknown",
				accounts: instruction.keys,
				args: { unknown: instruction.data },
			};
}
