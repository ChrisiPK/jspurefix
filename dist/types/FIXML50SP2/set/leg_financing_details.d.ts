/// <reference types="node" />
import { ILegFinancingContractualDefinitionsGrp } from './leg_financing_contractual_definitions_grp';
import { ILegFinancingTermSupplementGrp } from './leg_financing_term_supplement_grp';
import { ILegFinancingContractualMatrixGrp } from './leg_financing_contractual_matrix_grp';
export interface ILegFinancingDetails {
    LegAgreementDesc?: string;
    LegAgreementID?: string;
    LegAgreementVersion?: string;
    LegAgreementDate?: Date;
    LegAgreementCurrency?: string;
    LegMasterConfirmationDesc?: string;
    LegMasterConfirmationDate?: Date;
    LegMasterConfirmationAnnexDesc?: string;
    LegMasterConfirmationAnnexDate?: Date;
    LegBrokerConfirmationDesc?: string;
    LegCreditSupportAgreementDesc?: string;
    LegCreditSupportAgreementDate?: Date;
    LegCreditSupportAgreementID?: string;
    LegGoverningLaw?: string;
    LegDocumentationText?: string;
    EncodedLegDocumentationTextLen?: number;
    EncodedLegDocumentationText?: Buffer;
    LegTerminationType?: number;
    LegStartDate?: Date;
    LegEndDate?: Date;
    LegDeliveryType?: number;
    LegMarginRatio?: number;
    LegFinancingContractualDefinitionsGrp?: ILegFinancingContractualDefinitionsGrp[];
    LegFinancingTermSupplementGrp?: ILegFinancingTermSupplementGrp[];
    LegFinancingContractualMatrixGrp?: ILegFinancingContractualMatrixGrp[];
}
