export class EquipmentCategory {
    index: string;
    name: string;
    url: string;
};
export class ToolCategory {
    index: string;
    name: string;
    url: string;
};
export class Cost {
    quantity: number;
    unit: string;
};


export class EquipmentItem {
    special: any;
    index: string;
    name: string;
    equipment_category: [EquipmentCategory];
    tool_category: string;
    cost: [Cost];
    weight: 6,
    desc: any;
    url: string;
    contents: any;
    properties: any;
};