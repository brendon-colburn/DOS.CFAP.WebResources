module DOS.CFAP.WebResources {
    export interface IParams {
        $select?: string;
        $filter?: string;
        $orderby?: string;
        $top?: string;
        $expand?: string;
    }
}