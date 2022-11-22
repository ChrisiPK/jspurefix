/// <reference types="node" />
import { IFinancingContractualDefinitionGrp } from './financing_contractual_definition_grp';
import { IFinancingTermSupplementGrp } from './financing_term_supplement_grp';
import { IFinancingContractualMatrixGrp } from './financing_contractual_matrix_grp';
export interface IFinancingDetails {
    AgreementDesc?: string;
    AgreementID?: string;
    AgreementVersion?: string;
    AgreementDate?: Date;
    AgreementCurrency?: string;
    MasterConfirmationDesc?: string;
    MasterConfirmationDate?: Date;
    MasterConfirmationAnnexDesc?: string;
    MasterConfirmationAnnexDate?: Date;
    BrokerConfirmationDesc?: string;
    CreditSupportAgreementDesc?: string;
    CreditSupportAgreementDate?: Date;
    CreditSupportAgreementID?: string;
    GoverningLaw?: string;
    DocumentationText?: string;
    EncodedDocumentationTextLen?: number;
    EncodedDocumentationText?: Buffer;
    TerminationType?: number;
    StartDate?: Date;
    EndDate?: Date;
    DeliveryType?: number;
    MarginRatio?: number;
    FinancingContractualDefinitionGrp?: IFinancingContractualDefinitionGrp[];
    FinancingTermSupplementGrp?: IFinancingTermSupplementGrp[];
    FinancingContractualMatrixGrp?: IFinancingContractualMatrixGrp[];
}
