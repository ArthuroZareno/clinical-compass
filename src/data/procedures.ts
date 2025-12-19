export interface ProcedureStep {
  step: number;
  action: string;
  rationale?: string;
}

export interface Procedure {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  indications: string[];
  contraindications: string[];
  equipment: string[];
  preparation: string[];
  steps: ProcedureStep[];
  safetyAlerts: string[];
  nursingConsiderations: string[];
  postProcedureCare: string[];
  documentation: string[];
  commonErrors: string[];
  tips: string[];
  references: string[];
  difficulty: 'basic' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  procedureCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fundamentals of Nursing',
    slug: 'fundamentals',
    description: 'Core nursing skills including hygiene, positioning, and basic patient care',
    icon: 'Heart',
    procedureCount: 12
  },
  {
    id: '2',
    name: 'Vital Signs',
    slug: 'vital-signs',
    description: 'Assessment and monitoring of temperature, pulse, respiration, and blood pressure',
    icon: 'Activity',
    procedureCount: 8
  },
  {
    id: '3',
    name: 'Infection Control',
    slug: 'infection-control',
    description: 'Hand hygiene, PPE use, isolation precautions, and sterile technique',
    icon: 'Shield',
    procedureCount: 10
  },
  {
    id: '4',
    name: 'Medication Administration',
    slug: 'medication-administration',
    description: 'Safe medication practices including oral, parenteral, and topical routes',
    icon: 'Pill',
    procedureCount: 15
  },
  {
    id: '5',
    name: 'IV Therapy',
    slug: 'iv-therapy',
    description: 'Intravenous access, fluid administration, and IV medication delivery',
    icon: 'Droplet',
    procedureCount: 9
  },
  {
    id: '6',
    name: 'Wound Care',
    slug: 'wound-care',
    description: 'Wound assessment, dressing changes, and wound healing management',
    icon: 'Bandage',
    procedureCount: 11
  },
  {
    id: '7',
    name: 'Oxygen Therapy',
    slug: 'oxygen-therapy',
    description: 'Oxygen delivery systems, monitoring, and respiratory support',
    icon: 'Wind',
    procedureCount: 7
  },
  {
    id: '8',
    name: 'Catheterization',
    slug: 'catheterization',
    description: 'Urinary catheter insertion, care, and removal procedures',
    icon: 'CircleDot',
    procedureCount: 6
  },
  {
    id: '9',
    name: 'Nasogastric Procedures',
    slug: 'nasogastric',
    description: 'NG tube insertion, feeding, medication administration, and removal',
    icon: 'Utensils',
    procedureCount: 5
  },
  {
    id: '10',
    name: 'Emergency Procedures',
    slug: 'emergency',
    description: 'Basic life support, emergency response, and critical interventions',
    icon: 'Siren',
    procedureCount: 8
  }
];

export const procedures: Procedure[] = [
  {
    id: 'hand-hygiene',
    title: 'Hand Hygiene',
    category: 'Infection Control',
    categorySlug: 'infection-control',
    description: 'Hand hygiene is the single most important practice for preventing healthcare-associated infections. It involves cleaning hands using soap and water or alcohol-based hand rub to remove or destroy microorganisms.',
    indications: [
      'Before and after patient contact',
      'Before aseptic procedures',
      'After exposure to body fluids',
      'After touching patient surroundings',
      'Before putting on and after removing gloves'
    ],
    contraindications: [
      'Alcohol-based rub contraindicated when hands are visibly soiled',
      'Use soap and water when caring for patients with C. difficile or norovirus'
    ],
    equipment: [
      'Soap and running water OR',
      'Alcohol-based hand rub (60-95% alcohol)',
      'Clean paper towels',
      'Waste receptacle'
    ],
    preparation: [
      'Remove jewelry (rings, watches, bracelets)',
      'Ensure nails are short and clean',
      'Roll sleeves above wrists',
      'Check for skin integrity'
    ],
    steps: [
      { step: 1, action: 'Wet hands with warm running water', rationale: 'Warm water is more effective at removing oils and debris' },
      { step: 2, action: 'Apply enough soap to cover all hand surfaces', rationale: 'Adequate soap ensures proper lathering for effective cleaning' },
      { step: 3, action: 'Rub hands palm to palm', rationale: 'Creates friction to dislodge microorganisms' },
      { step: 4, action: 'Rub right palm over left dorsum with interlaced fingers and vice versa', rationale: 'Cleans between fingers where microorganisms accumulate' },
      { step: 5, action: 'Rub palm to palm with fingers interlaced', rationale: 'Thoroughly cleans finger surfaces' },
      { step: 6, action: 'Rub backs of fingers to opposing palms with fingers interlocked', rationale: 'Cleans knuckle areas often missed' },
      { step: 7, action: 'Perform rotational rubbing of left thumb clasped in right palm and vice versa', rationale: 'Thumbs are frequently missed during hand hygiene' },
      { step: 8, action: 'Perform rotational rubbing with clasped fingers of right hand in left palm and vice versa', rationale: 'Cleans fingertips which touch surfaces frequently' },
      { step: 9, action: 'Rinse hands thoroughly under running water', rationale: 'Removes soap and loosened microorganisms' },
      { step: 10, action: 'Dry hands thoroughly with single-use towel', rationale: 'Wet hands transfer microorganisms more easily' },
      { step: 11, action: 'Use towel to turn off faucet', rationale: 'Prevents recontamination from faucet handles' },
      { step: 12, action: 'Discard towel in appropriate receptacle', rationale: 'Maintains clean environment' }
    ],
    safetyAlerts: [
      'Do not use hot water as it increases risk of dermatitis',
      'Ensure hands are completely dry before donning gloves',
      'Report any skin breakdown to supervisor'
    ],
    nursingConsiderations: [
      'Model proper hand hygiene for patients and visitors',
      'Educate patients and families about hand hygiene importance',
      'Monitor hand hygiene compliance in clinical area'
    ],
    postProcedureCare: [
      'Apply hand moisturizer if needed to maintain skin integrity',
      'Assess for signs of skin irritation or breakdown'
    ],
    documentation: [
      'Document hand hygiene education provided to patient/family',
      'Report any barriers to compliance'
    ],
    commonErrors: [
      'Insufficient time spent washing (minimum 20 seconds needed)',
      'Missing areas between fingers and thumbs',
      'Not drying hands completely',
      'Using hot water causing skin damage'
    ],
    tips: [
      'Sing "Happy Birthday" twice to ensure 20-second duration',
      'Keep alcohol-based rub at point of care for easy access',
      'Use moisturizer regularly to prevent skin breakdown'
    ],
    references: [
      'World Health Organization. (2009). WHO Guidelines on Hand Hygiene in Health Care.',
      'Centers for Disease Control and Prevention. (2002). Guideline for Hand Hygiene in Health-Care Settings.',
      'The Joint Commission. (2023). Hand Hygiene Standards.'
    ],
    difficulty: 'basic',
    estimatedTime: '40-60 seconds'
  },
  {
    id: 'blood-pressure-measurement',
    title: 'Blood Pressure Measurement',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Blood pressure measurement is the assessment of the force exerted by blood against arterial walls during cardiac contraction (systolic) and relaxation (diastolic). Accurate measurement is essential for detecting hypertension, hypotension, and monitoring cardiovascular status.',
    indications: [
      'Routine vital signs assessment',
      'Cardiovascular assessment',
      'Before and after medication administration',
      'Pre and post-procedure monitoring',
      'Suspected hypertensive or hypotensive episodes'
    ],
    contraindications: [
      'Do not measure on arm with IV line, dialysis access, or lymphedema',
      'Avoid arm on affected side after mastectomy',
      'Do not use on injured or fractured extremity'
    ],
    equipment: [
      'Sphygmomanometer (manual or automatic)',
      'Appropriate size blood pressure cuff',
      'Stethoscope (for manual measurement)',
      'Alcohol swabs for cleaning',
      'Documentation materials'
    ],
    preparation: [
      'Ensure patient has rested for at least 5 minutes',
      'Patient should avoid caffeine, exercise, or smoking 30 minutes prior',
      'Position patient comfortably with arm supported at heart level',
      'Select appropriate cuff size (bladder should encircle 80% of arm)',
      'Expose the arm - remove or roll up sleeve'
    ],
    steps: [
      { step: 1, action: 'Position patient sitting or lying with arm at heart level', rationale: 'Ensures accurate reading; arm below heart level increases reading' },
      { step: 2, action: 'Palpate the brachial artery', rationale: 'Identifies correct placement location for stethoscope' },
      { step: 3, action: 'Apply cuff 2-3 cm above antecubital fossa', rationale: 'Allows room for stethoscope placement without interference' },
      { step: 4, action: 'Ensure cuff is snug but allows 2 fingers underneath', rationale: 'Too loose gives false high reading; too tight causes discomfort' },
      { step: 5, action: 'Palpate radial pulse and inflate cuff until pulse disappears, note reading', rationale: 'Estimates systolic pressure to avoid over-inflation' },
      { step: 6, action: 'Deflate cuff completely and wait 30 seconds', rationale: 'Allows blood to return to normal flow' },
      { step: 7, action: 'Place stethoscope over brachial artery', rationale: 'Best location to hear Korotkoff sounds' },
      { step: 8, action: 'Inflate cuff to 30 mmHg above estimated systolic pressure', rationale: 'Ensures complete occlusion of artery' },
      { step: 9, action: 'Deflate cuff slowly at 2-3 mmHg per second', rationale: 'Allows accurate detection of Korotkoff sounds' },
      { step: 10, action: 'Note systolic pressure at first Korotkoff sound', rationale: 'First sound indicates blood beginning to flow through artery' },
      { step: 11, action: 'Note diastolic pressure when sounds disappear', rationale: 'Disappearance indicates unrestricted blood flow' },
      { step: 12, action: 'Deflate cuff completely and remove', rationale: 'Ensures patient comfort and prevents tissue damage' }
    ],
    safetyAlerts: [
      'Report systolic BP >180 or <90 mmHg immediately',
      'Report diastolic BP >120 or <60 mmHg immediately',
      'Never leave inflated cuff on arm for extended periods'
    ],
    nursingConsiderations: [
      'Use same arm for serial measurements for consistency',
      'Document arm used and patient position',
      'Consider orthostatic measurements if indicated'
    ],
    postProcedureCare: [
      'Inform patient of blood pressure reading',
      'Explain significance if abnormal',
      'Schedule follow-up if needed'
    ],
    documentation: [
      'Record systolic/diastolic pressure (e.g., 120/80 mmHg)',
      'Document arm used (right or left)',
      'Note patient position (sitting, lying, standing)',
      'Record cuff size if non-standard',
      'Document any patient symptoms'
    ],
    commonErrors: [
      'Using incorrect cuff size (most common error)',
      'Patient arm not at heart level',
      'Deflating cuff too quickly',
      'Patient talking during measurement',
      'Taking reading over clothing'
    ],
    tips: [
      'When in doubt about cuff size, use the larger size',
      'If reading seems unusual, remeasure on opposite arm',
      'For obese patients, consider forearm measurement with appropriate cuff',
      'Digital monitors should be validated regularly'
    ],
    references: [
      'American Heart Association. (2020). Blood Pressure Measurement Guidelines.',
      'Whelton, P.K., et al. (2018). ACC/AHA Guideline for Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '3-5 minutes'
  },
  {
    id: 'urinary-catheter-insertion',
    title: 'Urinary Catheter Insertion (Female)',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Urinary catheterization is the insertion of a flexible tube into the bladder through the urethra for drainage of urine. This procedure requires strict aseptic technique to prevent catheter-associated urinary tract infections (CAUTI).',
    indications: [
      'Acute urinary retention',
      'Accurate urine output monitoring in critical illness',
      'Perioperative use for surgical procedures',
      'Bladder irrigation or medication instillation',
      'Chronic urinary retention when intermittent catheterization is not feasible'
    ],
    contraindications: [
      'Suspected urethral injury or trauma',
      'Blood at urethral meatus',
      'Suspected pelvic fracture',
      'Recent urological surgery (consult physician)'
    ],
    equipment: [
      'Sterile catheterization kit containing:',
      '- Sterile gloves (2 pairs)',
      '- Sterile drapes (fenestrated and non-fenestrated)',
      '- Antiseptic solution (povidone-iodine or chlorhexidine)',
      '- Cotton balls or swabs',
      '- Sterile lubricant',
      '- Appropriate size Foley catheter (typically 14-16 Fr for adults)',
      '- Prefilled syringe with sterile water (10 mL)',
      '- Urine collection bag',
      '- Specimen container if needed',
      'Adequate lighting',
      'Clean gloves for positioning',
      'Waterproof pad'
    ],
    preparation: [
      'Verify order and indication for catheterization',
      'Perform hand hygiene',
      'Gather all equipment',
      'Explain procedure to patient and obtain consent',
      'Provide privacy',
      'Position patient in dorsal recumbent position with knees flexed',
      'Place waterproof pad under patient',
      'Ensure adequate lighting'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Reduces transmission of microorganisms' },
      { step: 2, action: 'Cleanse perineal area with soap and water if visibly soiled', rationale: 'Removes gross contamination before sterile procedure' },
      { step: 3, action: 'Remove clean gloves and perform hand hygiene', rationale: 'Prepares for sterile technique' },
      { step: 4, action: 'Open catheterization kit using sterile technique', rationale: 'Maintains sterility of supplies' },
      { step: 5, action: 'Don sterile gloves', rationale: 'Maintains surgical asepsis' },
      { step: 6, action: 'Organize sterile field and prepare supplies', rationale: 'Ensures efficient procedure and maintains sterility' },
      { step: 7, action: 'Test balloon by inflating with sterile water, then deflate', rationale: 'Ensures balloon integrity before insertion' },
      { step: 8, action: 'Apply generous sterile lubricant to catheter tip', rationale: 'Facilitates insertion and reduces trauma' },
      { step: 9, action: 'Place sterile drape, exposing only perineal area', rationale: 'Creates sterile field around insertion site' },
      { step: 10, action: 'With non-dominant hand, separate labia to expose urethral meatus', rationale: 'Provides visualization and access' },
      { step: 11, action: 'Maintain separation throughout procedure', rationale: 'Hand becomes contaminated and must not touch sterile equipment' },
      { step: 12, action: 'With dominant hand, cleanse urethral meatus using antiseptic', rationale: 'Reduces microbial count at insertion site' },
      { step: 13, action: 'Use single downward stroke for each swab, front to back', rationale: 'Prevents contamination from anal area' },
      { step: 14, action: 'Pick up catheter with dominant hand, keeping end in collection container', rationale: 'Maintains sterility and prevents contamination' },
      { step: 15, action: 'Insert catheter gently 5-7.5 cm until urine flows', rationale: 'Female urethra is approximately 4 cm; extra insertion ensures bladder entry' },
      { step: 16, action: 'Advance catheter additional 2.5-5 cm after urine appears', rationale: 'Ensures catheter tip is fully in bladder before balloon inflation' },
      { step: 17, action: 'Inflate balloon with entire contents of prefilled syringe', rationale: 'Anchors catheter in bladder' },
      { step: 18, action: 'Gently pull catheter until resistance is felt', rationale: 'Confirms balloon is against bladder neck' },
      { step: 19, action: 'Connect catheter to drainage bag if not already attached', rationale: 'Establishes closed drainage system' },
      { step: 20, action: 'Secure catheter to inner thigh with securement device', rationale: 'Prevents traction and urethral trauma' },
      { step: 21, action: 'Position drainage bag below bladder level', rationale: 'Promotes drainage by gravity and prevents reflux' }
    ],
    safetyAlerts: [
      'STOP if resistance is met - do not force catheter',
      'Never inflate balloon until urine is flowing',
      'If blood appears or patient reports severe pain, stop and notify physician',
      'Use smallest catheter size appropriate for patient',
      'Remove catheter as soon as no longer indicated to prevent CAUTI'
    ],
    nursingConsiderations: [
      'Review CAUTI prevention bundle compliance',
      'Assess for catheter necessity daily',
      'Maintain closed drainage system',
      'Keep drainage bag below bladder level at all times',
      'Perform regular perineal hygiene'
    ],
    postProcedureCare: [
      'Document initial urine output amount and characteristics',
      'Monitor for signs of infection',
      'Ensure patient comfort',
      'Provide catheter care education',
      'Monitor intake and output'
    ],
    documentation: [
      'Date and time of insertion',
      'Catheter type and size',
      'Balloon inflation volume',
      'Patient tolerance of procedure',
      'Initial urine output and characteristics',
      'Specimen collected if applicable',
      'Securement method used'
    ],
    commonErrors: [
      'Inflating balloon before urine is visualized',
      'Using catheter larger than necessary',
      'Contaminating sterile field',
      'Inadequate lubrication',
      'Not advancing catheter far enough before balloon inflation',
      'Placing drainage bag above bladder level'
    ],
    tips: [
      'If having difficulty visualizing meatus, have assistant hold light',
      'For difficult anatomy, consider using a curved-tip catheter',
      'Warm lubricant slightly for patient comfort',
      'Ask patient to bear down gently to help relax sphincter',
      'If catheter will not advance, do not force - consult physician'
    ],
    references: [
      'Centers for Disease Control and Prevention. (2019). Guideline for Prevention of Catheter-Associated Urinary Tract Infections.',
      'Lippincott Nursing Procedures. (2023). 9th ed.',
      'Gould, C.V., et al. (2019). HICPAC Guideline for Prevention of CAUTI.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-20 minutes'
  }
];

export const getProcedureById = (id: string): Procedure | undefined => {
  return procedures.find(p => p.id === id);
};

export const getProceduresByCategory = (categorySlug: string): Procedure[] => {
  return procedures.filter(p => p.categorySlug === categorySlug);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const searchProcedures = (query: string): Procedure[] => {
  const lowerQuery = query.toLowerCase();
  return procedures.filter(p => 
    p.title.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};
