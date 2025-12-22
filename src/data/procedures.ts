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
      'Craven, R.F., & Hirnle, C.J. (2023). Fundamentals of Nursing, 9th ed.',
      'Centers for Disease Control and Prevention. (2019). Guideline for the Prevention of Surgical Site Infection.',
      'Association of periOperative Registered Nurses. (2023). Guidelines for Perioperative Practice.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'temperature-measurement',
    title: 'Temperature Measurement',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Temperature measurement is the assessment of body heat balance, reflecting the difference between heat produced and heat lost. Accurate measurement helps detect fever, hypothermia, and monitor patient condition.',
    indications: [
      'Routine vital signs assessment',
      'Suspected infection or sepsis',
      'Post-operative monitoring',
      'Environmental exposure (heat/cold)',
      'Medication therapy monitoring'
    ],
    contraindications: [
      'Oral: Patients who are unconscious, confused, or have oral surgery',
      'Rectal: Neutropenic patients, rectal surgery, diarrhea',
      'Axillary: Not recommended for critical temperature monitoring'
    ],
    equipment: [
      'Thermometer (digital, tympanic, or temporal)',
      'Probe covers (single-use)',
      'Alcohol swabs',
      'Gloves (for rectal measurement)',
      'Lubricant (for rectal measurement)',
      'Documentation materials'
    ],
    preparation: [
      'Verify patient identity',
      'Assess appropriate route for measurement',
      'Ensure patient has not had hot/cold drinks (oral) in past 15 minutes',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Prevents transmission of microorganisms' },
      { step: 2, action: 'Select appropriate thermometer and measurement site', rationale: 'Different sites have varying accuracy and indications' },
      { step: 3, action: 'Apply probe cover to thermometer', rationale: 'Prevents cross-contamination between patients' },
      { step: 4, action: 'For oral: Place under tongue in posterior sublingual pocket', rationale: 'Closest proximity to sublingual artery for accurate reading' },
      { step: 5, action: 'For tympanic: Gently pull pinna up and back (adult), insert probe', rationale: 'Straightens ear canal for accurate reading of tympanic membrane' },
      { step: 6, action: 'For temporal: Swipe across forehead from midline to temple', rationale: 'Measures heat from temporal artery blood flow' },
      { step: 7, action: 'Wait for audible signal indicating measurement complete', rationale: 'Ensures accurate reading is obtained' },
      { step: 8, action: 'Read and note temperature value', rationale: 'Accurate documentation requires immediate recording' },
      { step: 9, action: 'Remove and dispose of probe cover', rationale: 'Prevents contamination of thermometer' },
      { step: 10, action: 'Clean thermometer according to facility policy', rationale: 'Maintains equipment and prevents infection' }
    ],
    safetyAlerts: [
      'Report temperature >38.3°C (101°F) or <35°C (95°F) immediately',
      'Never use glass mercury thermometers - mercury is toxic',
      'Ensure correct technique to avoid inaccurate readings'
    ],
    nursingConsiderations: [
      'Consider patient factors affecting temperature (age, time of day, activity)',
      'Use consistent route for serial measurements',
      'Account for environmental factors'
    ],
    postProcedureCare: [
      'Inform patient of temperature reading',
      'Implement fever or hypothermia protocols if indicated',
      'Provide comfort measures as needed'
    ],
    documentation: [
      'Record temperature value with route used',
      'Note time of measurement',
      'Document any interventions for abnormal values'
    ],
    commonErrors: [
      'Taking oral temperature after hot/cold intake',
      'Incorrect thermometer placement',
      'Not waiting for complete reading',
      'Using inappropriate route for patient condition'
    ],
    tips: [
      'Tympanic is fastest and well-tolerated',
      'Oral is most common for alert, cooperative adults',
      'Temporal artery is good for pediatric patients',
      'Wait 15-30 minutes after hot/cold drinks for oral temp'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Sund-Levander, M., et al. (2002). Normal oral, rectal, tympanic and axillary body temperature in adult men and women. Scandinavian Journal of Caring Sciences.',
      'American Association of Critical-Care Nurses. (2023). Temperature Measurement Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '2-3 minutes'
  },
  {
    id: 'pulse-measurement',
    title: 'Pulse Assessment',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Pulse assessment involves palpating arterial pulsations to evaluate heart rate, rhythm, and quality. It provides essential information about cardiovascular function and peripheral perfusion.',
    indications: [
      'Routine vital signs assessment',
      'Cardiovascular status evaluation',
      'Before medication administration (digoxin, beta-blockers)',
      'Assessment of peripheral circulation',
      'Post-procedure monitoring'
    ],
    contraindications: [
      'Do not palpate carotid arteries simultaneously (risk of decreased cerebral blood flow)',
      'Avoid excessive pressure over carotid in patients with atherosclerosis'
    ],
    equipment: [
      'Watch with second hand or digital timer',
      'Stethoscope (for apical pulse)',
      'Documentation materials'
    ],
    preparation: [
      'Ensure patient has been at rest for 5 minutes',
      'Position patient comfortably',
      'Explain procedure',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Prevents transmission of microorganisms' },
      { step: 2, action: 'Position patient with arm relaxed at side or across chest', rationale: 'Allows easy access and reduces muscle tension' },
      { step: 3, action: 'Locate radial pulse on thumb side of wrist', rationale: 'Radial artery is easily accessible and commonly used' },
      { step: 4, action: 'Place index and middle fingers over artery', rationale: 'These fingers are most sensitive to pulsation' },
      { step: 5, action: 'Apply moderate pressure until pulse is felt', rationale: 'Too light may miss pulse; too heavy may occlude artery' },
      { step: 6, action: 'Count beats for 30 seconds, multiply by 2', rationale: 'Provides accurate rate for regular rhythms' },
      { step: 7, action: 'If irregular, count for full 60 seconds', rationale: 'Ensures accuracy when rhythm varies' },
      { step: 8, action: 'Assess pulse quality (bounding, weak, thready)', rationale: 'Indicates cardiac output and vascular status' },
      { step: 9, action: 'Note rhythm (regular or irregular)', rationale: 'Irregular rhythms may indicate arrhythmia' },
      { step: 10, action: 'Document findings', rationale: 'Accurate recording enables trend monitoring' }
    ],
    safetyAlerts: [
      'Report pulse <50 or >120 bpm in adults',
      'Report irregular rhythms not previously documented',
      'Assess apical pulse if radial pulse is irregular or weak'
    ],
    nursingConsiderations: [
      'Compare bilateral pulses for symmetry',
      'Note any pulse deficit (difference between apical and radial)',
      'Consider patient factors affecting rate (anxiety, medications, activity)'
    ],
    postProcedureCare: [
      'Inform patient of pulse rate',
      'Report abnormalities to physician',
      'Implement interventions for abnormal findings'
    ],
    documentation: [
      'Record rate (beats per minute)',
      'Document rhythm (regular/irregular)',
      'Note quality (bounding/normal/weak/thready)',
      'Record site used for measurement'
    ],
    commonErrors: [
      'Using thumb (has its own pulse)',
      'Counting for too short a time with irregular rhythm',
      'Applying too much pressure',
      'Not noting rhythm and quality'
    ],
    tips: [
      'Practice locating pulses on yourself first',
      'Use apical pulse for cardiac medications',
      'Check pedal pulses to assess peripheral circulation',
      'Doppler may be needed for weak pulses'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'American Heart Association. (2020). Guidelines for CPR and Emergency Cardiovascular Care.',
      'Lewis, S.L., et al. (2023). Medical-Surgical Nursing, 12th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '1-2 minutes'
  },
  {
    id: 'respiratory-rate-measurement',
    title: 'Respiratory Rate Assessment',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Respiratory rate assessment involves counting the number of breaths per minute and evaluating depth, rhythm, and effort. It is a vital indicator of respiratory function and overall patient condition.',
    indications: [
      'Routine vital signs assessment',
      'Respiratory distress evaluation',
      'Post-anesthesia monitoring',
      'Medication therapy monitoring (opioids, sedatives)',
      'Chronic respiratory disease management'
    ],
    contraindications: [
      'None - respiratory rate should always be assessed'
    ],
    equipment: [
      'Watch with second hand or digital timer',
      'Pulse oximeter (optional)',
      'Documentation materials'
    ],
    preparation: [
      'Do not inform patient you are counting respirations',
      'Keep hand on pulse site to disguise assessment',
      'Observe chest or abdomen movement'
    ],
    steps: [
      { step: 1, action: 'Keep fingers on radial pulse after pulse assessment', rationale: 'Patient awareness of observation may alter breathing pattern' },
      { step: 2, action: 'Observe rise and fall of chest or abdomen', rationale: 'One rise and fall equals one respiration' },
      { step: 3, action: 'Count respirations for 30 seconds, multiply by 2', rationale: 'Provides accurate rate for regular breathing' },
      { step: 4, action: 'If irregular, count for full 60 seconds', rationale: 'Ensures accuracy with variable patterns' },
      { step: 5, action: 'Observe depth of respirations (shallow, normal, deep)', rationale: 'Indicates tidal volume and effort' },
      { step: 6, action: 'Note rhythm (regular or irregular)', rationale: 'Patterns may indicate specific conditions' },
      { step: 7, action: 'Assess effort and use of accessory muscles', rationale: 'Indicates respiratory distress' },
      { step: 8, action: 'Listen for audible sounds (wheezing, stridor)', rationale: 'May indicate airway obstruction' },
      { step: 9, action: 'Note skin color (pallor, cyanosis)', rationale: 'Indicates oxygenation status' },
      { step: 10, action: 'Document findings', rationale: 'Enables trend monitoring and communication' }
    ],
    safetyAlerts: [
      'Report respiratory rate <10 or >24 breaths/minute in adults',
      'Report signs of respiratory distress immediately',
      'Notify physician of new onset abnormal breathing patterns'
    ],
    nursingConsiderations: [
      'Assess oxygen saturation with respiratory rate',
      'Note patient position during assessment',
      'Consider patient factors affecting rate'
    ],
    postProcedureCare: [
      'Position patient for optimal breathing',
      'Administer oxygen if ordered',
      'Report abnormalities to healthcare team'
    ],
    documentation: [
      'Record rate (breaths per minute)',
      'Document depth and rhythm',
      'Note any abnormal sounds or distress',
      'Record oxygen saturation if measured'
    ],
    commonErrors: [
      'Telling patient you are counting respirations',
      'Counting for too short a time',
      'Not noting depth, rhythm, and effort',
      'Missing signs of distress'
    ],
    tips: [
      'Count respirations immediately after pulse to avoid patient awareness',
      'Note breathing patterns: Cheyne-Stokes, Kussmaul, Biot',
      'Normal adult rate is 12-20 breaths/minute',
      'Document time if rate varies significantly'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Cretikos, M.A., et al. (2008). Respiratory rate: the neglected vital sign. Medical Journal of Australia.',
      'American Association of Critical-Care Nurses. (2023). Respiratory Assessment Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '1-2 minutes'
  },
  {
    id: 'intramuscular-injection',
    title: 'Intramuscular Injection',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Intramuscular (IM) injection involves depositing medication into muscle tissue for absorption. This route is used for medications that require rapid absorption and for depot preparations that release slowly.',
    indications: [
      'Medications requiring rapid absorption',
      'Vaccines and immunizations',
      'Medications irritating to subcutaneous tissue',
      'Depot or slow-release preparations',
      'When oral route is contraindicated'
    ],
    contraindications: [
      'Coagulation disorders (relative)',
      'Muscle atrophy at injection site',
      'Active infection at injection site',
      'Patient on anticoagulation therapy (use caution)'
    ],
    equipment: [
      'Medication ordered',
      'Appropriate syringe (1-3 mL typically)',
      'Needle: 21-23 gauge, 1-1.5 inch for adults',
      'Alcohol swabs',
      'Non-sterile gloves',
      'Adhesive bandage',
      'Sharps container'
    ],
    preparation: [
      'Verify medication order (right patient, drug, dose, route, time)',
      'Check for allergies',
      'Review medication information',
      'Calculate correct dose',
      'Draw up medication using aseptic technique',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity using two identifiers', rationale: 'Prevents medication errors' },
      { step: 2, action: 'Perform hand hygiene and don gloves', rationale: 'Reduces infection risk' },
      { step: 3, action: 'Select appropriate injection site', rationale: 'Ventrogluteal preferred for adults; deltoid for vaccines' },
      { step: 4, action: 'Position patient to relax target muscle', rationale: 'Reduces discomfort and facilitates absorption' },
      { step: 5, action: 'Locate anatomical landmarks', rationale: 'Ensures injection into correct muscle and avoids nerves/vessels' },
      { step: 6, action: 'Cleanse site with alcohol swab in circular motion', rationale: 'Reduces microorganisms at injection site' },
      { step: 7, action: 'Allow alcohol to dry', rationale: 'Prevents stinging and allows antiseptic action' },
      { step: 8, action: 'Spread skin taut (or use Z-track for irritating medications)', rationale: 'Facilitates needle insertion and seals medication in muscle' },
      { step: 9, action: 'Insert needle at 90-degree angle with quick, firm motion', rationale: 'Ensures medication enters muscle tissue' },
      { step: 10, action: 'Aspirate for blood (if facility policy requires)', rationale: 'CDC no longer requires; check facility policy' },
      { step: 11, action: 'Inject medication slowly and steadily', rationale: 'Reduces tissue trauma and pain' },
      { step: 12, action: 'Wait 10 seconds before withdrawing needle', rationale: 'Allows medication to disperse in tissue' },
      { step: 13, action: 'Withdraw needle quickly at same angle', rationale: 'Minimizes tissue damage' },
      { step: 14, action: 'Apply gentle pressure with gauze', rationale: 'Controls bleeding; do not massage unless indicated' },
      { step: 15, action: 'Apply adhesive bandage', rationale: 'Protects injection site' },
      { step: 16, action: 'Dispose of needle in sharps container immediately', rationale: 'Prevents needlestick injuries' }
    ],
    safetyAlerts: [
      'Never recap needles',
      'Maximum IM volume: 3 mL in large muscle, 1 mL in deltoid',
      'Monitor for signs of allergic reaction for 15-30 minutes after injection',
      'Do not inject into areas with skin abnormalities or inflammation'
    ],
    nursingConsiderations: [
      'Rotate injection sites if giving multiple injections',
      'Use smallest gauge needle appropriate for medication viscosity',
      'Consider patient age and muscle mass when selecting site and needle length',
      'Distraction techniques may reduce anxiety'
    ],
    postProcedureCare: [
      'Monitor for adverse reactions',
      'Educate patient on expected effects and when to report problems',
      'Document injection site and any reactions'
    ],
    documentation: [
      'Medication name, dose, and route',
      'Injection site used',
      'Time of administration',
      'Patient response and any reactions',
      'Lot number for vaccines'
    ],
    commonErrors: [
      'Wrong site selection',
      'Incorrect needle length for patient body habitus',
      'Injecting too quickly',
      'Not allowing alcohol to dry',
      'Recapping needles'
    ],
    tips: [
      'Ventrogluteal site has no major nerves or vessels',
      'For anxious patients, have them take deep breath during insertion',
      'Ice applied before injection may reduce pain',
      'Position to promote muscle relaxation (prone or side-lying for gluteal)'
    ],
    references: [
      'CDC. (2023). Vaccine Administration Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Nicoll, L.H., & Hesby, A. (2002). Intramuscular injection: An integrative research review. Applied Nursing Research.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'subcutaneous-injection',
    title: 'Subcutaneous Injection',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Subcutaneous injection involves injecting medication into the fatty tissue layer beneath the skin. This route provides slow, sustained absorption and is commonly used for insulin, heparin, and vaccines.',
    indications: [
      'Insulin administration',
      'Anticoagulants (heparin, enoxaparin)',
      'Certain vaccines',
      'Medications requiring slow, sustained absorption',
      'Self-administration medications'
    ],
    contraindications: [
      'Areas with scarring, bruising, or inflammation',
      'Edematous areas',
      'Moles, birthmarks, or skin abnormalities',
      'Areas with poor circulation'
    ],
    equipment: [
      'Medication ordered',
      'Insulin syringe or appropriate syringe',
      'Needle: 25-30 gauge, 3/8 to 5/8 inch',
      'Alcohol swabs',
      'Non-sterile gloves',
      'Sharps container'
    ],
    preparation: [
      'Verify medication order',
      'Check allergies',
      'Calculate correct dose',
      'Draw up medication using aseptic technique',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity using two identifiers', rationale: 'Prevents medication errors' },
      { step: 2, action: 'Perform hand hygiene and don gloves', rationale: 'Reduces infection risk' },
      { step: 3, action: 'Select injection site (abdomen, thigh, upper arm)', rationale: 'These areas have adequate subcutaneous tissue' },
      { step: 4, action: 'Cleanse site with alcohol in circular motion', rationale: 'Reduces microorganisms' },
      { step: 5, action: 'Allow alcohol to dry', rationale: 'Prevents stinging during injection' },
      { step: 6, action: 'Pinch up 1-2 inches of tissue', rationale: 'Lifts subcutaneous tissue away from muscle' },
      { step: 7, action: 'Insert needle at 45-90 degree angle', rationale: '90° for adequate tissue; 45° for thin patients' },
      { step: 8, action: 'Release pinched tissue', rationale: 'Prevents injection into compressed tissue' },
      { step: 9, action: 'Inject medication slowly', rationale: 'Reduces discomfort and allows absorption' },
      { step: 10, action: 'Withdraw needle at same angle', rationale: 'Minimizes tissue damage' },
      { step: 11, action: 'Apply gentle pressure (do not massage)', rationale: 'Prevents bruising; massage may alter absorption' },
      { step: 12, action: 'Dispose of needle in sharps container', rationale: 'Prevents needlestick injuries' }
    ],
    safetyAlerts: [
      'Never massage site after heparin or insulin injection',
      'Rotate injection sites systematically',
      'Maximum volume: 0.5-1 mL per site',
      'Do not aspirate for subcutaneous injections'
    ],
    nursingConsiderations: [
      'Use rotation chart for patients requiring frequent injections',
      'Teach self-injection technique to appropriate patients',
      'Space injections at least 1 inch from previous sites'
    ],
    postProcedureCare: [
      'Monitor for signs of reaction',
      'Educate patient on site rotation',
      'Document administration and site'
    ],
    documentation: [
      'Medication, dose, and route',
      'Injection site',
      'Time of administration',
      'Patient response'
    ],
    commonErrors: [
      'Injecting into muscle instead of subcutaneous tissue',
      'Not rotating sites',
      'Massaging injection site (especially with heparin)',
      'Using incorrect angle for patient body type'
    ],
    tips: [
      'Abdomen has fastest absorption for insulin',
      'Create rotation chart for patients',
      'Let refrigerated medication warm slightly before injection',
      'Use shorter needle for thin patients'
    ],
    references: [
      'American Diabetes Association. (2023). Standards of Medical Care in Diabetes.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Institute for Safe Medication Practices. (2023). Safe Practice Guidelines for Adult IV Push Medications.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-7 minutes'
  },
  {
    id: 'oral-medication-administration',
    title: 'Oral Medication Administration',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Oral medication administration involves giving medications by mouth for absorption through the gastrointestinal tract. It is the safest, most convenient, and most economical route of medication delivery.',
    indications: [
      'Patient able to swallow',
      'Functional gastrointestinal tract',
      'Medication available in oral form',
      'No contraindication to oral intake'
    ],
    contraindications: [
      'NPO status',
      'Nausea and vomiting',
      'Difficulty swallowing (dysphagia)',
      'Unconscious patient',
      'GI obstruction or ileus'
    ],
    equipment: [
      'Medication ordered',
      'Medication cup',
      'Water or appropriate liquid',
      'Straw if needed',
      'Pill crusher if needed and appropriate',
      'Medication administration record'
    ],
    preparation: [
      'Review medication order',
      'Check for allergies',
      'Check for drug interactions',
      'Verify patient ability to swallow',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Verify medication order against MAR', rationale: 'Ensures right medication is given' },
      { step: 2, action: 'Perform hand hygiene', rationale: 'Prevents contamination' },
      { step: 3, action: 'Prepare medications at designated area', rationale: 'Reduces distractions and errors' },
      { step: 4, action: 'Check medication against order three times', rationale: 'The three checks prevent errors' },
      { step: 5, action: 'Verify patient identity using two identifiers', rationale: 'Ensures right patient' },
      { step: 6, action: 'Explain medication purpose and side effects', rationale: 'Promotes patient education and compliance' },
      { step: 7, action: 'Assist patient to sitting or upright position', rationale: 'Prevents aspiration and facilitates swallowing' },
      { step: 8, action: 'Give tablet or capsule with water', rationale: 'Water aids swallowing and absorption' },
      { step: 9, action: 'Observe patient swallow medication', rationale: 'Ensures medication is actually taken' },
      { step: 10, action: 'Document administration', rationale: 'Legal record and prevents double-dosing' }
    ],
    safetyAlerts: [
      'Never crush enteric-coated or extended-release medications',
      'Check for food-drug interactions',
      'Hold medication and notify physician if patient cannot swallow',
      'Verify patient can safely take oral medications'
    ],
    nursingConsiderations: [
      'Check if medications should be taken with or without food',
      'Space medications appropriately for absorption',
      'Consider alternative forms (liquid, dissolvable) for dysphagia'
    ],
    postProcedureCare: [
      'Monitor for drug effects and side effects',
      'Ensure patient remains upright for 30 minutes if aspiration risk',
      'Document any adverse reactions'
    ],
    documentation: [
      'Medication name, dose, and route',
      'Time administered',
      'Patient response',
      'Any medications held and reason'
    ],
    commonErrors: [
      'Not verifying patient identity',
      'Crushing medications that should not be crushed',
      'Not checking for allergies',
      'Leaving medications at bedside'
    ],
    tips: [
      'Always stay with patient until medication is swallowed',
      'Use teach-back to ensure patient understanding',
      'Report any difficulty swallowing to healthcare team',
      'Consider timing with meals as appropriate'
    ],
    references: [
      'Institute for Safe Medication Practices. (2023). ISMP Medication Safety Alert.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'The Joint Commission. (2023). Medication Management Standards.'
    ],
    difficulty: 'basic',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'peripheral-iv-insertion',
    title: 'Peripheral IV Catheter Insertion',
    category: 'IV Therapy',
    categorySlug: 'iv-therapy',
    description: 'Peripheral intravenous catheter insertion involves placing a catheter into a peripheral vein to establish vascular access for fluid, medication, or blood product administration.',
    indications: [
      'Fluid therapy',
      'IV medication administration',
      'Blood transfusion',
      'Parenteral nutrition',
      'Emergency vascular access'
    ],
    contraindications: [
      'Infection at insertion site',
      'Phlebitis or thrombosis',
      'AV fistula or shunt in arm',
      'Lymphedema in extremity',
      'Mastectomy side (relative)'
    ],
    equipment: [
      'IV catheter (appropriate gauge: 18-24G typically)',
      'Tourniquet',
      'Antiseptic solution (chlorhexidine preferred)',
      'Transparent dressing',
      'Extension tubing',
      'Saline flush',
      'Tape',
      'Non-sterile gloves',
      'Sharps container',
      'IV start kit'
    ],
    preparation: [
      'Verify order for IV therapy',
      'Assess patient for allergies (latex, chlorhexidine, iodine)',
      'Select appropriate site (non-dominant arm, distal to proximal)',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Apply tourniquet 4-6 inches above intended site', rationale: 'Distends veins for easier access' },
      { step: 3, action: 'Select vein by palpation', rationale: 'Vein should feel spongy and bouncy' },
      { step: 4, action: 'Release tourniquet while preparing equipment', rationale: 'Prevents prolonged venous occlusion' },
      { step: 5, action: 'Cleanse site with antiseptic for 30 seconds, let dry', rationale: 'Reduces microorganisms; must dry for full effect' },
      { step: 6, action: 'Reapply tourniquet', rationale: 'Distends vein for cannulation' },
      { step: 7, action: 'Anchor vein by stretching skin below insertion site', rationale: 'Stabilizes vein and prevents rolling' },
      { step: 8, action: 'Insert catheter at 10-30 degree angle, bevel up', rationale: 'Shallow angle for superficial veins' },
      { step: 9, action: 'Observe for blood flashback in chamber', rationale: 'Confirms entry into vein' },
      { step: 10, action: 'Lower angle and advance slightly, then advance catheter only', rationale: 'Ensures catheter tip is in vein' },
      { step: 11, action: 'Release tourniquet', rationale: 'Restores blood flow' },
      { step: 12, action: 'Apply pressure above catheter tip, remove stylet', rationale: 'Prevents blood leakage' },
      { step: 13, action: 'Connect extension tubing or saline lock', rationale: 'Establishes closed system' },
      { step: 14, action: 'Flush with saline, observe for infiltration', rationale: 'Confirms patency and proper placement' },
      { step: 15, action: 'Apply transparent dressing', rationale: 'Secures catheter and allows site visualization' },
      { step: 16, action: 'Document date/time on dressing', rationale: 'Tracks dwell time for replacement' }
    ],
    safetyAlerts: [
      'Dispose of needle immediately in sharps container',
      'Never reuse catheters or attempt insertion more than twice',
      'Change peripheral IV sites every 72-96 hours per policy',
      'Monitor for signs of phlebitis, infiltration, or infection'
    ],
    nursingConsiderations: [
      'Use smallest gauge appropriate for therapy',
      'Avoid areas of flexion if possible',
      'Use vein finder or ultrasound for difficult access',
      'Warm site before insertion to dilate veins'
    ],
    postProcedureCare: [
      'Assess site regularly for complications',
      'Flush before and after medication administration',
      'Document condition of site each shift'
    ],
    documentation: [
      'Date, time, and site of insertion',
      'Catheter gauge and length',
      'Number of attempts',
      'Nurse initials',
      'Patient tolerance'
    ],
    commonErrors: [
      'Through-and-through puncture of vein',
      'Not anchoring vein properly',
      'Inserting at too steep an angle',
      'Not allowing antiseptic to dry'
    ],
    tips: [
      'Have patient make fist and pump to enhance vein visibility',
      'Use warm compresses to dilate veins',
      'Start distally and work proximally',
      'Palpate, do not just look - best veins may not be visible'
    ],
    references: [
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.',
      'CDC. (2023). Guidelines for Prevention of Intravascular Catheter-Related Infections.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'iv-fluid-administration',
    title: 'IV Fluid Administration',
    category: 'IV Therapy',
    categorySlug: 'iv-therapy',
    description: 'Intravenous fluid administration involves the delivery of fluids directly into the bloodstream to maintain hydration, replace fluid losses, or deliver medications and electrolytes.',
    indications: [
      'Dehydration',
      'Inability to take oral fluids',
      'Electrolyte imbalances',
      'Medication delivery',
      'Blood volume replacement'
    ],
    contraindications: [
      'Heart failure (use caution)',
      'Renal failure (use caution)',
      'Fluid overload',
      'Specific contraindications based on fluid type'
    ],
    equipment: [
      'Prescribed IV solution',
      'IV tubing (primary or secondary)',
      'IV pole',
      'Infusion pump (if required)',
      'Time tape (for gravity infusion)',
      'Alcohol swabs',
      'Gloves'
    ],
    preparation: [
      'Verify order for type, amount, and rate of infusion',
      'Check solution for expiration, clarity, and integrity',
      'Calculate drip rate if using gravity',
      'Perform hand hygiene',
      'Explain procedure to patient'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity and IV order', rationale: 'Prevents errors' },
      { step: 2, action: 'Inspect IV solution bag for clarity and expiration', rationale: 'Ensures solution safety' },
      { step: 3, action: 'Attach IV tubing using aseptic technique', rationale: 'Prevents contamination' },
      { step: 4, action: 'Close roller clamp on tubing', rationale: 'Prevents air in line' },
      { step: 5, action: 'Spike IV bag and hang on IV pole', rationale: 'Establishes fluid source' },
      { step: 6, action: 'Squeeze drip chamber until half full', rationale: 'Allows visualization of drops and prevents air entry' },
      { step: 7, action: 'Open clamp and prime tubing, removing all air', rationale: 'Air in tubing can cause air embolism' },
      { step: 8, action: 'Close clamp when tubing is primed', rationale: 'Prevents fluid loss' },
      { step: 9, action: 'Clean IV port on patient catheter with alcohol', rationale: 'Reduces infection risk' },
      { step: 10, action: 'Connect tubing to patient IV catheter', rationale: 'Establishes infusion' },
      { step: 11, action: 'Set infusion rate on pump or adjust roller clamp', rationale: 'Delivers prescribed rate' },
      { step: 12, action: 'Label tubing with date and time', rationale: 'Tracks for replacement schedule' },
      { step: 13, action: 'Monitor site and patient response', rationale: 'Detects complications early' }
    ],
    safetyAlerts: [
      'Always verify IV solution with medication order',
      'Monitor for signs of fluid overload (dyspnea, edema, crackles)',
      'Check IV site for infiltration or phlebitis',
      'Never speed up IV to catch up if behind schedule'
    ],
    nursingConsiderations: [
      'Calculate and monitor intake and output',
      'Assess vital signs per policy',
      'Monitor laboratory values (electrolytes)',
      'Educate patient on signs of complications'
    ],
    postProcedureCare: [
      'Document solution, rate, and patient response',
      'Monitor ongoing infusion',
      'Report any adverse reactions'
    ],
    documentation: [
      'Solution type and volume',
      'Rate of infusion',
      'Time started',
      'IV site condition',
      'Patient tolerance'
    ],
    commonErrors: [
      'Incorrect rate calculation',
      'Not removing all air from tubing',
      'Not monitoring site regularly',
      'Speeding up rate to catch up'
    ],
    tips: [
      'Use infusion pump for high-risk medications',
      'Time tape helps track gravity infusions',
      'Check site every 1-2 hours',
      'Know your facility drop factor for gravity calculation'
    ],
    references: [
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Phillips, L.D., & Gorski, L.A. (2014). Manual of IV Therapeutics, 6th ed.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'simple-wound-dressing',
    title: 'Simple Wound Dressing Change',
    category: 'Wound Care',
    categorySlug: 'wound-care',
    description: 'A simple wound dressing change involves removing the old dressing, cleaning the wound, assessing healing progress, and applying a new sterile dressing to promote wound healing and prevent infection.',
    indications: [
      'Surgical incisions',
      'Traumatic wounds',
      'Skin tears',
      'Minor burns',
      'Wound assessment and care'
    ],
    contraindications: [
      'Allergies to dressing materials',
      'Consider sterile technique for deep or complex wounds'
    ],
    equipment: [
      'Sterile dressing supplies',
      'Sterile gloves',
      'Clean gloves',
      'Normal saline or prescribed cleanser',
      'Sterile gauze',
      'Tape or transparent dressing',
      'Waterproof pad',
      'Waste bag'
    ],
    preparation: [
      'Review order and wound care plan',
      'Assess patient pain level and medicate if needed',
      'Gather all supplies',
      'Explain procedure to patient',
      'Position patient for comfort and access',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Prevents contamination' },
      { step: 2, action: 'Place waterproof pad under wound area', rationale: 'Protects bedding from drainage' },
      { step: 3, action: 'Carefully remove old dressing', rationale: 'Minimizes trauma to healing tissue' },
      { step: 4, action: 'Assess old dressing for drainage amount, color, odor', rationale: 'Provides information about healing' },
      { step: 5, action: 'Dispose of soiled dressing and gloves', rationale: 'Prevents cross-contamination' },
      { step: 6, action: 'Perform hand hygiene and don sterile gloves', rationale: 'Maintains sterile technique' },
      { step: 7, action: 'Assess wound (size, color, drainage, edges)', rationale: 'Documents healing progress' },
      { step: 8, action: 'Clean wound from center outward with prescribed solution', rationale: 'Removes debris; outward motion prevents contamination' },
      { step: 9, action: 'Pat dry with sterile gauze', rationale: 'Moisture can promote bacterial growth' },
      { step: 10, action: 'Apply appropriate dressing per wound care plan', rationale: 'Protects wound and promotes healing' },
      { step: 11, action: 'Secure dressing with tape', rationale: 'Keeps dressing in place' },
      { step: 12, action: 'Remove gloves and perform hand hygiene', rationale: 'Prevents transmission of organisms' }
    ],
    safetyAlerts: [
      'Report signs of infection: increased redness, warmth, purulent drainage, fever',
      'Document changes in wound appearance',
      'Use strict sterile technique for deep or chronic wounds',
      'Never force dressing off if stuck to wound'
    ],
    nursingConsiderations: [
      'Time dressing changes with pain medication peak effect',
      'Use normal saline to moisten adherent dressings',
      'Assess patient understanding of wound care',
      'Consider wound culture if infection suspected'
    ],
    postProcedureCare: [
      'Dispose of supplies properly',
      'Position patient comfortably',
      'Educate patient on signs of infection',
      'Document wound assessment and care'
    ],
    documentation: [
      'Wound location, size (length x width x depth)',
      'Wound bed appearance (color, tissue type)',
      'Drainage amount, color, odor',
      'Periwound condition',
      'Dressing applied',
      'Patient tolerance'
    ],
    commonErrors: [
      'Breaking sterile technique',
      'Not assessing wound before covering',
      'Using inappropriate cleaning technique',
      'Not documenting wound measurements'
    ],
    tips: [
      'Take photo if facility policy allows for comparison',
      'Use consistent measurement technique',
      'Consider specialized dressings based on wound type',
      'Involve wound care specialist for complex wounds'
    ],
    references: [
      'Wound, Ostomy and Continence Nurses Society. (2023). Guidelines for Prevention and Management of Pressure Injuries.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'National Pressure Ulcer Advisory Panel. (2019). Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'nasogastric-tube-insertion',
    title: 'Nasogastric Tube Insertion',
    category: 'Nasogastric Procedures',
    categorySlug: 'nasogastric',
    description: 'Nasogastric tube insertion involves placing a flexible tube through the nose, down the esophagus, and into the stomach for decompression, feeding, or medication administration.',
    indications: [
      'Gastric decompression',
      'Enteral feeding',
      'Medication administration',
      'Gastric lavage',
      'Bowel obstruction'
    ],
    contraindications: [
      'Severe facial trauma or basilar skull fracture',
      'Esophageal stricture or varices',
      'Recent nasal surgery',
      'Coagulation disorders (relative)'
    ],
    equipment: [
      'Appropriate size NG tube (14-18 Fr for adults)',
      'Water-soluble lubricant',
      'Cup of water with straw',
      '60 mL syringe',
      'pH strips',
      'Stethoscope',
      'Tape or commercial tube holder',
      'Emesis basin',
      'Tissues',
      'Penlight',
      'Non-sterile gloves',
      'Suction equipment if for decompression'
    ],
    preparation: [
      'Verify order for NG tube insertion',
      'Assess nasal patency (ask patient to sniff through each nostril)',
      'Assess gag reflex',
      'Explain procedure and obtain consent',
      'Position patient upright (45-90 degrees) if possible',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Measure tube: nose tip to earlobe to xiphoid process', rationale: 'Determines length needed to reach stomach' },
      { step: 3, action: 'Mark measured length on tube', rationale: 'Indicates when tube is properly positioned' },
      { step: 4, action: 'Lubricate first 3-4 inches of tube', rationale: 'Facilitates insertion and reduces trauma' },
      { step: 5, action: 'Have patient tilt head slightly forward', rationale: 'Closes airway and opens esophagus' },
      { step: 6, action: 'Insert tube gently along floor of nostril', rationale: 'Follows natural passage' },
      { step: 7, action: 'When tube reaches pharynx, have patient sip water and swallow', rationale: 'Swallowing closes epiglottis and advances tube' },
      { step: 8, action: 'Advance tube with each swallow until mark is reached', rationale: 'Swallowing facilitates passage into esophagus' },
      { step: 9, action: 'Stop if patient shows signs of distress or coughing', rationale: 'May indicate tracheal placement' },
      { step: 10, action: 'Verify placement: aspirate gastric contents, check pH (<5.5)', rationale: 'Gastric pH is acidic; confirms stomach placement' },
      { step: 11, action: 'Obtain x-ray confirmation if required by policy', rationale: 'Gold standard for placement verification' },
      { step: 12, action: 'Secure tube to nose with tape or holder', rationale: 'Prevents displacement' },
      { step: 13, action: 'Connect to suction or feeding as ordered', rationale: 'Establishes intended therapy' }
    ],
    safetyAlerts: [
      'Stop immediately if patient coughs continuously, chokes, or becomes cyanotic',
      'Never force tube if resistance is met',
      'Verify placement before any instillation',
      'X-ray confirmation required for feeding tube placement',
      'Auscultation alone is NOT reliable for verification'
    ],
    nursingConsiderations: [
      'Use smaller tube (12-14 Fr) for patient comfort when possible',
      'Consider topical anesthetic if available and ordered',
      'Document nare used and tube marking at nose',
      'Verify placement before each use'
    ],
    postProcedureCare: [
      'Provide nasal and oral hygiene',
      'Monitor for complications (sinusitis, erosion)',
      'Secure tube to prevent tension',
      'Document output and patency'
    ],
    documentation: [
      'Date and time of insertion',
      'Size and type of tube',
      'Nare used',
      'Length of tube at nose',
      'Verification method and results',
      'Patient tolerance',
      'Type of drainage if applicable'
    ],
    commonErrors: [
      'Not measuring tube properly',
      'Not verifying placement before use',
      'Forcing tube against resistance',
      'Using air auscultation alone for verification'
    ],
    tips: [
      'Ice chips may be easier to swallow than water',
      'Flex chin to chest helps close trachea',
      'If gagging, pause and let patient rest',
      'Keep emesis basin nearby throughout procedure'
    ],
    references: [
      'American Association of Critical-Care Nurses. (2022). NG Tube Insertion and Verification Practice Alert.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Irving, S.Y., et al. (2014). Feeding tube placement verification: Guidelines for clinical practice. Critical Care Nurse.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'oxygen-nasal-cannula',
    title: 'Oxygen Therapy via Nasal Cannula',
    category: 'Oxygen Therapy',
    categorySlug: 'oxygen-therapy',
    description: 'Nasal cannula oxygen therapy delivers low-flow supplemental oxygen through a lightweight, two-pronged device placed in the nostrils. It is the most common and comfortable method of oxygen delivery.',
    indications: [
      'Hypoxemia (SpO2 <90% or per order)',
      'Respiratory distress',
      'Increased work of breathing',
      'Post-operative care',
      'Chronic respiratory conditions'
    ],
    contraindications: [
      'Complete nasal obstruction',
      'Specific contraindications vary by patient condition'
    ],
    equipment: [
      'Nasal cannula (adult or pediatric size)',
      'Oxygen flow meter',
      'Oxygen source (wall outlet or tank)',
      'Pulse oximeter',
      'Humidifier if flow >4 L/min'
    ],
    preparation: [
      'Verify oxygen order (flow rate)',
      'Check oxygen source and flow meter',
      'Assess baseline oxygen saturation',
      'Explain procedure to patient',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Verify order for oxygen therapy', rationale: 'Oxygen is a medication requiring prescription' },
      { step: 2, action: 'Perform hand hygiene', rationale: 'Infection prevention' },
      { step: 3, action: 'Attach nasal cannula tubing to flow meter', rationale: 'Establishes oxygen delivery system' },
      { step: 4, action: 'Set oxygen flow to prescribed rate', rationale: 'Delivers ordered concentration' },
      { step: 5, action: 'Verify oxygen is flowing by feeling at prongs', rationale: 'Confirms system is working' },
      { step: 6, action: 'Place prongs in patient nostrils, curving downward', rationale: 'Proper positioning delivers oxygen effectively' },
      { step: 7, action: 'Loop tubing over ears and adjust slider under chin', rationale: 'Secures cannula comfortably' },
      { step: 8, action: 'Monitor oxygen saturation', rationale: 'Assesses effectiveness of therapy' },
      { step: 9, action: 'Document application and patient response', rationale: 'Legal record and tracks effectiveness' }
    ],
    safetyAlerts: [
      'High oxygen concentrations in COPD patients may suppress respiratory drive',
      'Nasal cannula delivers FiO2 of 24-44% at 1-6 L/min',
      'Never use >6 L/min through nasal cannula',
      'Post no smoking signs - oxygen supports combustion'
    ],
    nursingConsiderations: [
      'Check for skin irritation behind ears and at nostrils',
      'Provide humidification for flows >4 L/min',
      'Monitor respiratory status continuously',
      'Educate patient and family on oxygen safety'
    ],
    postProcedureCare: [
      'Reassess oxygen saturation at regular intervals',
      'Monitor for signs of hypoxia or hyperoxia',
      'Maintain nasal hygiene',
      'Document ongoing assessments'
    ],
    documentation: [
      'Flow rate ordered and delivered',
      'Oxygen saturation before and after',
      'Patient tolerance',
      'Respiratory assessment'
    ],
    commonErrors: [
      'Setting incorrect flow rate',
      'Not checking for flow at prongs',
      'Not monitoring saturation response',
      'Using higher flow than indicated for nasal cannula'
    ],
    tips: [
      'Use gauze padding behind ears if irritation occurs',
      'Keep tubing free of kinks',
      'Check connections regularly',
      'Consider mask if higher FiO2 needed'
    ],
    references: [
      'American Thoracic Society. (2023). Oxygen Therapy Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'British Thoracic Society. (2017). Guideline for Emergency Oxygen Use in Adult Patients.'
    ],
    difficulty: 'basic',
    estimatedTime: '5 minutes'
  },
  {
    id: 'basic-life-support',
    title: 'Basic Life Support (Adult CPR)',
    category: 'Emergency Procedures',
    categorySlug: 'emergency',
    description: 'Basic Life Support (BLS) is a level of medical care for life-threatening conditions, focusing on maintaining circulation and breathing through chest compressions and rescue breathing until advanced care arrives.',
    indications: [
      'Unresponsive patient',
      'Absence of breathing or only gasping',
      'No detectable pulse',
      'Cardiac arrest'
    ],
    contraindications: [
      'Valid DNR order in place',
      'Obviously irreversible death (rigor mortis, dependent lividity)'
    ],
    equipment: [
      'AED (Automated External Defibrillator)',
      'Pocket mask or bag-valve-mask',
      'Gloves',
      'Barrier device for rescue breathing'
    ],
    preparation: [
      'Ensure scene safety',
      'Check for responsiveness',
      'Call for help immediately',
      'Call code/activate emergency response',
      'Get AED'
    ],
    steps: [
      { step: 1, action: 'Confirm scene is safe', rationale: 'Rescuer safety is priority' },
      { step: 2, action: 'Check responsiveness: tap and shout', rationale: 'Determines if patient needs CPR' },
      { step: 3, action: 'If unresponsive, call for help and get AED', rationale: 'Early defibrillation improves survival' },
      { step: 4, action: 'Check for breathing and pulse simultaneously (10 seconds max)', rationale: 'Gasping is not adequate breathing' },
      { step: 5, action: 'If no pulse, begin chest compressions', rationale: 'Maintains circulation to vital organs' },
      { step: 6, action: 'Place heel of hand on lower half of sternum', rationale: 'Correct hand placement maximizes effectiveness' },
      { step: 7, action: 'Compress at least 2 inches deep at rate of 100-120/min', rationale: 'Adequate depth and rate essential for perfusion' },
      { step: 8, action: 'Allow full chest recoil between compressions', rationale: 'Allows heart to refill with blood' },
      { step: 9, action: 'After 30 compressions, give 2 breaths (if trained)', rationale: 'Provides oxygenation' },
      { step: 10, action: 'Continue cycles of 30:2', rationale: 'Maintains circulation until advanced help arrives' },
      { step: 11, action: 'Use AED as soon as available', rationale: 'Early defibrillation critical for shockable rhythms' },
      { step: 12, action: 'Resume CPR immediately after shock', rationale: 'Minimizes interruptions in compressions' },
      { step: 13, action: 'Continue until patient recovers, help arrives, or exhausted', rationale: 'Persistence improves outcomes' }
    ],
    safetyAlerts: [
      'Minimize interruptions in chest compressions',
      'Push hard and fast - do not be afraid to hurt patient',
      'Switch compressors every 2 minutes to prevent fatigue',
      'Clear everyone before AED shock delivery'
    ],
    nursingConsiderations: [
      'Know location of nearest AED',
      'Maintain current BLS certification',
      'Practice team dynamics in code situations',
      'Debrief after resuscitation events'
    ],
    postProcedureCare: [
      'Support advanced cardiac life support interventions',
      'Document resuscitation events',
      'Provide family support and updates',
      'Participate in debriefing'
    ],
    documentation: [
      'Time CPR initiated',
      'Interventions performed',
      'Response to interventions',
      'Time of ROSC or cessation',
      'Team members present'
    ],
    commonErrors: [
      'Compressing too shallow',
      'Rate too slow or too fast',
      'Not allowing full chest recoil',
      'Excessive ventilation',
      'Prolonged pulse checks'
    ],
    tips: [
      'Push to the beat of "Stayin Alive" for correct rate',
      'Lock elbows and push straight down',
      'Avoid leaning on chest between compressions',
      'Hands-only CPR is acceptable if untrained in rescue breathing'
    ],
    references: [
      'American Heart Association. (2020). Guidelines for CPR and Emergency Cardiovascular Care.',
      'European Resuscitation Council. (2021). Guidelines for Resuscitation.',
      'International Liaison Committee on Resuscitation. (2020). Consensus on CPR and ECC Science.'
    ],
    difficulty: 'intermediate',
    estimatedTime: 'Until help arrives'
  },
  {
    id: 'patient-bed-bath',
    title: 'Complete Bed Bath',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'A complete bed bath is provided to patients who are unable to bathe themselves. It maintains hygiene, promotes comfort, allows for skin assessment, and provides an opportunity for therapeutic communication.',
    indications: [
      'Immobile patients',
      'Critically ill patients',
      'Post-operative patients',
      'Patients with activity restrictions',
      'Patients requiring total care'
    ],
    contraindications: [
      'Patient refusal (respect autonomy)',
      'Unstable vital signs (modify approach)'
    ],
    equipment: [
      'Bath basin with warm water (110-115°F)',
      'Bath towels (2-3)',
      'Washcloths (2-3)',
      'Bath blanket',
      'Soap or no-rinse cleanser',
      'Clean gown and linens',
      'Lotion',
      'Oral hygiene supplies',
      'Laundry hamper',
      'Clean gloves'
    ],
    preparation: [
      'Explain procedure to patient',
      'Offer toileting before bath',
      'Gather all supplies',
      'Adjust room temperature',
      'Provide privacy',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Cover patient with bath blanket, remove gown', rationale: 'Maintains warmth and privacy' },
      { step: 3, action: 'Make mitt with washcloth', rationale: 'Prevents cold cloth ends from dragging on skin' },
      { step: 4, action: 'Wash eyes first: inner canthus to outer, no soap', rationale: 'Clean to dirty principle; soap irritates eyes' },
      { step: 5, action: 'Wash face, ears, and neck', rationale: 'Face washed before other areas' },
      { step: 6, action: 'Wash arms: far arm first, axilla to fingertips', rationale: 'Far side reduces reaching over clean areas' },
      { step: 7, action: 'Place hands in basin if able', rationale: 'Soaking softens nails and removes debris' },
      { step: 8, action: 'Wash chest and abdomen', rationale: 'Assess skin during bathing' },
      { step: 9, action: 'Wash legs: far leg first, thigh to foot', rationale: 'Promotes venous return' },
      { step: 10, action: 'Place feet in basin if able', rationale: 'Soaking is therapeutic and cleansing' },
      { step: 11, action: 'Change water and washcloth', rationale: 'Fresh water for perineal area' },
      { step: 12, action: 'Wash perineal area (front to back in females)', rationale: 'Prevents contamination from rectal area' },
      { step: 13, action: 'Turn patient and wash back', rationale: 'Completes cleaning and allows back assessment' },
      { step: 14, action: 'Apply lotion, focusing on bony prominences', rationale: 'Moisturizes skin and increases circulation' },
      { step: 15, action: 'Apply clean gown and linens', rationale: 'Completes hygiene and comfort' }
    ],
    safetyAlerts: [
      'Assess skin for breakdown during bath',
      'Maintain fall precautions if sitting up',
      'Check water temperature before applying',
      'Watch for fatigue in cardiac or respiratory patients'
    ],
    nursingConsiderations: [
      'Use bath time for therapeutic communication',
      'Assess range of motion and mobility',
      'Document skin conditions observed',
      'Modify based on patient tolerance'
    ],
    postProcedureCare: [
      'Position patient comfortably',
      'Raise side rails if indicated',
      'Place call light within reach',
      'Document care and observations'
    ],
    documentation: [
      'Type of bath given',
      'Patient tolerance',
      'Skin assessment findings',
      'Any abnormalities noted'
    ],
    commonErrors: [
      'Water too hot or too cold',
      'Leaving patient exposed and cold',
      'Not changing water when dirty',
      'Rushing through assessment opportunities'
    ],
    tips: [
      'Organize supplies before starting',
      'Work systematically to avoid missing areas',
      'Keep talking to maintain comfort',
      'Combine with linen change for efficiency'
    ],
    references: [
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Craven, R.F., & Hirnle, C.J. (2023). Fundamentals of Nursing, 9th ed.',
      'Taylors Fundamentals of Nursing. (2023). 10th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '20-30 minutes'
  },
  {
    id: 'patient-positioning',
    title: 'Patient Positioning and Repositioning',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'Patient positioning involves placing patients in specific positions to maintain body alignment, prevent complications, promote comfort, and facilitate procedures. Regular repositioning prevents pressure injuries.',
    indications: [
      'Immobile patients',
      'Prevention of pressure injuries',
      'Therapeutic positioning for conditions',
      'Procedural positioning',
      'Post-operative care'
    ],
    contraindications: [
      'Unstable spine injury',
      'Certain hip fractures or surgeries',
      'Condition-specific restrictions per physician'
    ],
    equipment: [
      'Pillows (various sizes)',
      'Positioning wedges',
      'Draw sheet or lift sheet',
      'Heel protectors',
      'Hand rolls',
      'Additional staff for assistance'
    ],
    preparation: [
      'Review mobility restrictions',
      'Explain procedure to patient',
      'Obtain assistance if needed',
      'Lower bed and lock brakes',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene', rationale: 'Infection prevention' },
      { step: 2, action: 'Explain procedure and intended position to patient', rationale: 'Promotes cooperation and reduces anxiety' },
      { step: 3, action: 'Lower head of bed if appropriate', rationale: 'Reduces shearing during repositioning' },
      { step: 4, action: 'Use draw sheet for repositioning', rationale: 'Reduces friction and protects skin' },
      { step: 5, action: 'Move patient toward edge before turning', rationale: 'Ensures patient ends up in center of bed' },
      { step: 6, action: 'Turn patient using proper body mechanics', rationale: 'Protects nurse and patient from injury' },
      { step: 7, action: 'Position patient in desired position', rationale: 'Achieves therapeutic goal' },
      { step: 8, action: 'Place pillows to maintain alignment', rationale: 'Supports joints and prevents strain' },
      { step: 9, action: 'Protect bony prominences with pillows or pads', rationale: 'Prevents pressure injury' },
      { step: 10, action: 'Ensure no pressure on heels', rationale: 'Heels are high-risk pressure areas' },
      { step: 11, action: 'Check extremity alignment and support', rationale: 'Prevents contractures and nerve damage' },
      { step: 12, action: 'Assess patient comfort and adjust as needed', rationale: 'Promotes compliance with positioning' }
    ],
    safetyAlerts: [
      'Reposition at least every 2 hours',
      'Do not drag patient across sheets - use lift sheet',
      'Get adequate help for dependent patients',
      'Assess skin at each position change'
    ],
    nursingConsiderations: [
      'Document time and position in turning schedule',
      'Consider specialty beds for high-risk patients',
      'Coordinate positioning with other care activities',
      'Individualize based on patient tolerance'
    ],
    postProcedureCare: [
      'Ensure patient is comfortable',
      'Place call light within reach',
      'Document position and skin condition'
    ],
    documentation: [
      'Time of position change',
      'Position achieved',
      'Skin assessment findings',
      'Patient tolerance',
      'Devices used'
    ],
    commonErrors: [
      'Waiting too long between position changes',
      'Not using enough pillows for support',
      'Leaving heels on mattress',
      'Not checking skin before and after'
    ],
    tips: [
      'Use 30-degree rule for lateral positioning',
      'Float heels off bed with pillow under calves',
      'Check for wrinkles in sheets under patient',
      'Use positioning devices consistently'
    ],
    references: [
      'National Pressure Ulcer Advisory Panel. (2019). Prevention and Treatment of Pressure Ulcers/Injuries.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.',
      'Agency for Healthcare Research and Quality. (2023). Pressure Injury Prevention Guidelines.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'urinary-catheter-male',
    title: 'Urinary Catheter Insertion (Male)',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Male urinary catheterization involves inserting a flexible tube through the urethra into the bladder. The male urethra is longer and has two curves, requiring specific technique modifications.',
    indications: [
      'Acute urinary retention',
      'Accurate urine output monitoring',
      'Perioperative use',
      'Bladder irrigation',
      'Chronic retention when intermittent catheterization not feasible'
    ],
    contraindications: [
      'Suspected urethral injury',
      'Blood at urethral meatus',
      'Recent prostate surgery (consult physician)',
      'Known urethral stricture'
    ],
    equipment: [
      'Sterile catheterization kit',
      'Foley catheter (16-18 Fr typically for adults)',
      'Sterile gloves (2 pairs)',
      'Antiseptic solution',
      'Sterile lubricant (generous amount)',
      'Prefilled syringe with sterile water',
      'Drainage bag',
      'Waterproof pad'
    ],
    preparation: [
      'Verify order and indication',
      'Explain procedure to patient',
      'Provide privacy',
      'Position patient supine with legs slightly apart',
      'Perform hand hygiene',
      'Open sterile supplies'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Initial cleansing protection' },
      { step: 2, action: 'Cleanse penis and perineal area with soap and water', rationale: 'Removes gross contamination' },
      { step: 3, action: 'Remove gloves, hand hygiene, don sterile gloves', rationale: 'Establishes sterile technique' },
      { step: 4, action: 'Organize sterile field and test catheter balloon', rationale: 'Ensures equipment function' },
      { step: 5, action: 'Apply generous sterile lubricant to catheter (10-15 cm)', rationale: 'Male urethra longer; needs more lubrication' },
      { step: 6, action: 'With non-dominant hand, hold penis perpendicular to body', rationale: 'Straightens urethra for easier passage' },
      { step: 7, action: 'Retract foreskin if present', rationale: 'Exposes meatus for cleansing' },
      { step: 8, action: 'Cleanse meatus with antiseptic in circular motion', rationale: 'Reduces microorganisms at insertion site' },
      { step: 9, action: 'Hold penis at 60-90 degree angle to body', rationale: 'Straightens prostatic curve' },
      { step: 10, action: 'Insert catheter slowly until urine flows (15-20 cm)', rationale: 'Male urethra approximately 20 cm long' },
      { step: 11, action: 'Lower penis and advance catheter 2-3 cm more', rationale: 'Ensures tip is fully in bladder' },
      { step: 12, action: 'Inflate balloon with sterile water per manufacturer', rationale: 'Secures catheter in bladder' },
      { step: 13, action: 'Gently pull back until resistance felt', rationale: 'Positions balloon at bladder neck' },
      { step: 14, action: 'Replace foreskin if retracted', rationale: 'Prevents paraphimosis' },
      { step: 15, action: 'Secure catheter to lower abdomen or thigh', rationale: 'Reduces urethral trauma and movement' },
      { step: 16, action: 'Position drainage bag below bladder', rationale: 'Promotes drainage by gravity' }
    ],
    safetyAlerts: [
      'STOP if resistance is met - do not force',
      'Never inflate balloon until urine is flowing',
      'ALWAYS replace foreskin after procedure to prevent paraphimosis',
      'Use larger catheter with more lubricant if BPH suspected',
      'Contact physician if unable to pass catheter'
    ],
    nursingConsiderations: [
      'Consider coude catheter for patients with BPH',
      'Use lidocaine gel if available and ordered',
      'Assess for prostatic enlargement history',
      'Monitor for complications'
    ],
    postProcedureCare: [
      'Document initial urine output',
      'Monitor for hematuria',
      'Assess for patient comfort',
      'Provide catheter care education'
    ],
    documentation: [
      'Date and time of insertion',
      'Catheter size and type',
      'Amount of water used for balloon',
      'Initial urine amount and characteristics',
      'Patient tolerance'
    ],
    commonErrors: [
      'Not using enough lubricant',
      'Not holding penis correctly',
      'Inflating balloon before adequate insertion',
      'Forgetting to replace foreskin'
    ],
    tips: [
      'Warn patient of pressure sensation',
      'Ask patient to bear down gently at prostatic curve',
      'Use gentle steady pressure at resistance points',
      'Consider specialist referral if difficult insertion'
    ],
    references: [
      'Urological Association. (2023). Catheter Guidelines.',
      'CDC. (2023). CAUTI Prevention Guidelines.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'catheter-care',
    title: 'Indwelling Catheter Care',
    category: 'Catheterization',
    categorySlug: 'catheterization',
    description: 'Indwelling catheter care involves maintaining hygiene at the catheter insertion site and along the drainage system to prevent catheter-associated urinary tract infections (CAUTI).',
    indications: [
      'All patients with indwelling urinary catheters',
      'Routine daily care',
      'When soiling occurs',
      'Per facility policy intervals'
    ],
    contraindications: [
      'None - all catheterized patients require care'
    ],
    equipment: [
      'Clean washcloth',
      'Soap and water or perineal cleanser',
      'Clean towel',
      'Clean gloves',
      'Waterproof pad'
    ],
    preparation: [
      'Explain procedure to patient',
      'Provide privacy',
      'Position patient supine',
      'Gather supplies',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don clean gloves', rationale: 'Infection prevention' },
      { step: 2, action: 'Place waterproof pad under patient', rationale: 'Protects bedding' },
      { step: 3, action: 'Gently wash perineal area with soap and water', rationale: 'Removes secretions and bacteria' },
      { step: 4, action: 'Clean catheter from meatus outward 4 inches', rationale: 'Cleans from clean to dirty' },
      { step: 5, action: 'Rinse thoroughly', rationale: 'Removes soap residue' },
      { step: 6, action: 'Pat dry gently', rationale: 'Moisture promotes bacterial growth' },
      { step: 7, action: 'Check catheter securement device', rationale: 'Prevents traction on catheter' },
      { step: 8, action: 'Ensure tubing is not kinked', rationale: 'Maintains drainage' },
      { step: 9, action: 'Verify drainage bag is below bladder level', rationale: 'Promotes gravity drainage and prevents reflux' },
      { step: 10, action: 'Empty drainage bag as needed', rationale: 'Prevents overfilling and reflux' }
    ],
    safetyAlerts: [
      'Never disconnect catheter from drainage tubing',
      'Do not raise drainage bag above bladder level',
      'Report signs of infection immediately',
      'Advocate for catheter removal when no longer indicated'
    ],
    nursingConsiderations: [
      'Assess catheter necessity daily',
      'Monitor urine characteristics',
      'Maintain closed drainage system',
      'Educate patient and family on care'
    ],
    postProcedureCare: [
      'Position patient comfortably',
      'Document care provided',
      'Report any abnormalities'
    ],
    documentation: [
      'Time of catheter care',
      'Condition of meatus and surrounding skin',
      'Urine characteristics',
      'Any patient concerns'
    ],
    commonErrors: [
      'Breaking closed system unnecessarily',
      'Not cleaning catheter properly',
      'Allowing bag to rest on floor',
      'Not checking for kinks in tubing'
    ],
    tips: [
      'Perform catheter care during routine hygiene',
      'Use catheter care checklist',
      'Document daily catheter necessity assessment',
      'Empty bag before transporting patient'
    ],
    references: [
      'CDC. (2023). CAUTI Prevention Guidelines.',
      'AHRQ. (2023). Comprehensive Unit-based Safety Program for CAUTI.',
      'Infusion Nurses Society. (2021). Infusion Therapy Standards of Practice.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes'
  },
  {
    id: 'sterile-gloving',
    title: 'Sterile Gloving Technique',
    category: 'Infection Control',
    categorySlug: 'infection-control',
    description: 'Sterile gloving is a critical skill for maintaining surgical asepsis during invasive procedures. Proper technique prevents contamination of sterile gloves and protects both patient and healthcare worker.',
    indications: [
      'Surgical procedures',
      'Urinary catheterization',
      'Wound care requiring sterile technique',
      'Central line insertion or care',
      'Any procedure requiring surgical asepsis'
    ],
    contraindications: [
      'Latex allergy (use non-latex alternatives)',
      'Open wounds or lesions on hands (use additional barrier)'
    ],
    equipment: [
      'Sterile gloves of appropriate size',
      'Clean, flat surface for glove package',
      'Hand hygiene supplies'
    ],
    preparation: [
      'Perform thorough hand hygiene',
      'Remove all jewelry',
      'Ensure nails are short and clean',
      'Select correct glove size',
      'Check package integrity and expiration date'
    ],
    steps: [
      { step: 1, action: 'Place sterile glove package on clean, flat surface at waist level', rationale: 'Provides accessible work surface and prevents contamination' },
      { step: 2, action: 'Open outer package without touching inner sterile package', rationale: 'Maintains sterility of inner package' },
      { step: 3, action: 'Open inner package by touching only outer edges', rationale: 'Inside of package and gloves remain sterile' },
      { step: 4, action: 'Identify right and left gloves (thumbs face outward)', rationale: 'Ensures correct glove for each hand' },
      { step: 5, action: 'With non-dominant hand, grasp inside cuff of glove for dominant hand', rationale: 'Inside of glove will contact skin, maintaining sterility of outside' },
      { step: 6, action: 'Insert dominant hand into glove with fingers pointing upward', rationale: 'Allows gravity to help slide glove on' },
      { step: 7, action: 'Pull glove onto hand, touching only inside of cuff', rationale: 'Prevents contamination of sterile outer surface' },
      { step: 8, action: 'With gloved dominant hand, slide fingers under cuff of remaining glove', rationale: 'Sterile surface touches sterile surface' },
      { step: 9, action: 'Pull second glove onto non-dominant hand', rationale: 'Maintains sterility using sterile-to-sterile contact' },
      { step: 10, action: 'Adjust gloves for comfortable fit without touching bare skin', rationale: 'Ensures proper fit while maintaining sterility' },
      { step: 11, action: 'Keep gloved hands above waist and in front of body', rationale: 'Area below waist and behind body are considered contaminated' },
      { step: 12, action: 'Inspect gloves for tears or defects', rationale: 'Ensures barrier integrity' }
    ],
    safetyAlerts: [
      'If glove becomes contaminated, remove and replace with new sterile gloves',
      'If glove tears during procedure, stop and replace immediately',
      'Do not touch any non-sterile surface with gloved hands'
    ],
    nursingConsiderations: [
      'Practice technique regularly to maintain competency',
      'Choose correct glove size to prevent tears',
      'Have backup pair readily available'
    ],
    postProcedureCare: [
      'Remove gloves using proper technique to prevent contamination',
      'Perform hand hygiene after glove removal',
      'Dispose of gloves in appropriate waste container'
    ],
    documentation: [
      'Document use of sterile technique in procedure note',
      'Note if any breaks in sterile technique occurred'
    ],
    commonErrors: [
      'Touching outside of glove with bare hand',
      'Allowing gloves to touch non-sterile surfaces',
      'Using incorrect glove size',
      'Not checking for tears before use'
    ],
    tips: [
      'Keep hands dry for easier gloving',
      'If struggling, allow cuff to snap back and try again',
      'Practice with eyes closed to develop tactile awareness',
      'Keep spare gloves accessible during procedures'
    ],
    references: [
      'AORN. (2023). Guidelines for Perioperative Practice.',
      'CDC. (2019). Guideline for Disinfection and Sterilization in Healthcare Facilities.',
      'WHO. (2009). WHO Guidelines on Hand Hygiene in Health Care.'
    ],
    difficulty: 'basic',
    estimatedTime: '2-3 minutes'
  },
  {
    id: 'isolation-precautions',
    title: 'Isolation Precautions Implementation',
    category: 'Infection Control',
    categorySlug: 'infection-control',
    description: 'Isolation precautions are infection prevention practices used to prevent transmission of infectious agents. This includes standard precautions and transmission-based precautions tailored to the mode of disease transmission.',
    indications: [
      'Patients with known or suspected infectious diseases',
      'Patients colonized with multidrug-resistant organisms',
      'Immunocompromised patients requiring protection',
      'During outbreak situations',
      'Post-exposure prophylaxis situations'
    ],
    contraindications: [
      'None absolute - precautions must be adapted to patient needs'
    ],
    equipment: [
      'Appropriate personal protective equipment (PPE):',
      '- N95 respirator or surgical mask',
      '- Gown',
      '- Gloves',
      '- Eye protection (goggles or face shield)',
      'Hand hygiene supplies',
      'Isolation signage',
      'Dedicated patient care equipment'
    ],
    preparation: [
      'Review patient diagnosis and required precautions',
      'Verify appropriate isolation room (negative pressure for airborne)',
      'Gather all necessary PPE',
      'Post appropriate signage on door',
      'Educate patient and visitors about precautions'
    ],
    steps: [
      { step: 1, action: 'Identify type of isolation required (contact, droplet, airborne)', rationale: 'Determines appropriate PPE and room requirements' },
      { step: 2, action: 'Perform hand hygiene before donning PPE', rationale: 'Reduces microorganism transmission' },
      { step: 3, action: 'Don gown first, tying at neck and waist', rationale: 'Gown goes on first to protect clothing' },
      { step: 4, action: 'Put on mask or respirator, ensuring proper seal', rationale: 'Protects respiratory system; must fit test N95' },
      { step: 5, action: 'Apply eye protection if required', rationale: 'Protects mucous membranes of eyes' },
      { step: 6, action: 'Don gloves, pulling cuffs over gown cuffs', rationale: 'Ensures no gap between glove and gown' },
      { step: 7, action: 'Enter patient room and provide care', rationale: 'Minimize time in room while providing quality care' },
      { step: 8, action: 'To remove: Unfasten gown ties and remove gloves with gown', rationale: 'Gloves are most contaminated; removing together minimizes contact' },
      { step: 9, action: 'Remove eye protection by handling headband or earpieces only', rationale: 'Front of eyewear is contaminated' },
      { step: 10, action: 'Remove mask/respirator by handling straps only', rationale: 'Front of mask is contaminated' },
      { step: 11, action: 'Perform hand hygiene immediately after doffing', rationale: 'Removes any contamination from removal process' },
      { step: 12, action: 'Exit room and document care provided', rationale: 'Maintains record of patient contact' }
    ],
    safetyAlerts: [
      'Never reuse single-use PPE',
      'N95 respirators require annual fit testing',
      'Ensure negative pressure room for airborne precautions',
      'Report any PPE failures or exposures immediately'
    ],
    nursingConsiderations: [
      'Batch care activities to minimize room entries',
      'Keep dedicated equipment in isolation room',
      'Monitor visitors for compliance',
      'Assess patient psychosocial needs related to isolation'
    ],
    postProcedureCare: [
      'Ensure patient has call light and essentials within reach',
      'Schedule regular check-ins to reduce isolation effects',
      'Clean and disinfect reusable equipment before removal'
    ],
    documentation: [
      'Type of isolation precautions in place',
      'Patient and family education provided',
      'Any breaks in isolation protocol',
      'Cultures or tests pending'
    ],
    commonErrors: [
      'Incorrect sequence of donning/doffing PPE',
      'Touching face with contaminated gloves',
      'Not performing hand hygiene between steps',
      'Using incorrect PPE for isolation type'
    ],
    tips: [
      'Post donning/doffing sequence at room entrance',
      'Use buddy system for high-risk doffing',
      'Pre-stage supplies to minimize room entries',
      'Consider patient mental health in long-term isolation'
    ],
    references: [
      'CDC. (2023). Guidelines for Isolation Precautions.',
      'APIC. (2023). Infection Prevention Manual.',
      'OSHA. (2023). Bloodborne Pathogen Standards.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-10 minutes for donning/doffing'
  },
  {
    id: 'venipuncture',
    title: 'Venipuncture for Blood Draw',
    category: 'IV Therapy',
    categorySlug: 'iv-therapy',
    description: 'Venipuncture is the puncture of a vein for the collection of blood specimens for laboratory analysis. Proper technique ensures patient safety, specimen integrity, and accurate test results.',
    indications: [
      'Laboratory blood tests ordered',
      'Blood culture collection',
      'Blood bank specimens',
      'Therapeutic phlebotomy',
      'Blood donation'
    ],
    contraindications: [
      'Avoid arm with AV fistula or graft',
      'Avoid arm on side of mastectomy with lymph node removal',
      'Avoid sites with IV infusion, hematoma, or infection',
      'Use caution in patients on anticoagulants',
      'Avoid areas of burns or scarring'
    ],
    equipment: [
      'Vacutainer system or syringe with appropriate gauge needle (21-23g)',
      'Blood collection tubes in correct order of draw',
      'Tourniquet',
      'Alcohol prep pads',
      'Gauze pads',
      'Adhesive bandage or tape',
      'Gloves',
      'Sharps container',
      'Labels and requisitions'
    ],
    preparation: [
      'Verify patient identity using two identifiers',
      'Check order and required tests',
      'Explain procedure to patient',
      'Position patient comfortably with arm extended',
      'Assemble equipment and label tubes',
      'Perform hand hygiene and don gloves'
    ],
    steps: [
      { step: 1, action: 'Apply tourniquet 3-4 inches above intended site', rationale: 'Distends veins for easier visualization and palpation' },
      { step: 2, action: 'Ask patient to make fist without pumping', rationale: 'Further distends veins; pumping can alter lab values' },
      { step: 3, action: 'Palpate and select suitable vein (antecubital preferred)', rationale: 'Antecubital veins are larger and more stable' },
      { step: 4, action: 'Clean site with alcohol in circular motion, allow to air dry', rationale: 'Reduces skin flora; wet alcohol causes hemolysis' },
      { step: 5, action: 'Anchor vein by pulling skin taut below puncture site', rationale: 'Prevents vein from rolling during insertion' },
      { step: 6, action: 'Insert needle at 15-30 degree angle, bevel up', rationale: 'Allows smooth entry into vein' },
      { step: 7, action: 'Observe for flashback in tubing or needle hub', rationale: 'Confirms successful vein entry' },
      { step: 8, action: 'Collect tubes in correct order of draw', rationale: 'Prevents cross-contamination of additives' },
      { step: 9, action: 'Release tourniquet before removing last tube', rationale: 'Reduces risk of hematoma formation' },
      { step: 10, action: 'Have patient open fist', rationale: 'Reduces venous pressure' },
      { step: 11, action: 'Remove needle and apply gauze with pressure', rationale: 'Achieves hemostasis at puncture site' },
      { step: 12, action: 'Activate safety device and dispose in sharps container', rationale: 'Prevents needlestick injury' },
      { step: 13, action: 'Apply adhesive bandage after bleeding stops', rationale: 'Protects puncture site' },
      { step: 14, action: 'Gently invert tubes with additives 8-10 times', rationale: 'Ensures proper mixing of blood and additives' },
      { step: 15, action: 'Label tubes at bedside and transport promptly', rationale: 'Ensures specimen integrity and correct identification' }
    ],
    safetyAlerts: [
      'Never recap needles - use safety device immediately',
      'If patient feels faint, lower head and apply cool cloth',
      'Release tourniquet after 1 minute maximum',
      'Stop if patient reports shooting pain (possible nerve contact)'
    ],
    nursingConsiderations: [
      'Apply warm compress to site if veins are difficult to access',
      'Consider butterfly needle for small or fragile veins',
      'Limit attempts to 2 per phlebotomist',
      'Document failed attempts'
    ],
    postProcedureCare: [
      'Instruct patient to keep bandage on for 15-30 minutes',
      'Advise to avoid heavy lifting with that arm',
      'Monitor for signs of hematoma or continued bleeding',
      'Provide refreshments if large volume drawn'
    ],
    documentation: [
      'Date, time, and site of collection',
      'Tests collected and number of tubes',
      'Any complications or difficulties',
      'Patient tolerance of procedure'
    ],
    commonErrors: [
      'Leaving tourniquet on too long (alters results)',
      'Incorrect order of draw',
      'Underfilling or overfilling tubes',
      'Not mixing tubes properly',
      'Mislabeling specimens'
    ],
    tips: [
      'Use median cubital vein when possible',
      'Palpate, don\'t just look for veins',
      'Keep patient arm straight and lower than heart',
      'Use pediatric tubes for elderly or anemic patients'
    ],
    references: [
      'CLSI. (2023). Procedures for Collection of Diagnostic Blood Specimens by Venipuncture.',
      'WHO. (2010). Best Practices in Phlebotomy.',
      'ASCP. (2023). Phlebotomy Standards.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'tracheostomy-care',
    title: 'Tracheostomy Care and Suctioning',
    category: 'Oxygen Therapy',
    categorySlug: 'oxygen-therapy',
    description: 'Tracheostomy care involves maintaining patency and cleanliness of the tracheostomy tube and surrounding stoma to prevent infection and ensure adequate ventilation. This includes suctioning, inner cannula care, and site cleaning.',
    indications: [
      'Routine tracheostomy maintenance (every 8-12 hours)',
      'Visible secretions in or around tube',
      'Audible gurgling or noisy breathing',
      'Decreased oxygen saturation',
      'Patient distress or difficulty breathing',
      'Soiled or wet tracheostomy dressing'
    ],
    contraindications: [
      'Recent tracheostomy surgery (modified technique required)',
      'Bleeding from stoma (notify physician first)',
      'Unstable patient (stabilize first unless airway compromise)'
    ],
    equipment: [
      'Sterile suction catheter kit',
      'Suction machine with appropriate pressure (80-120 mmHg)',
      'Sterile normal saline',
      'Tracheostomy care kit (brush, sterile gauze, ties)',
      'Hydrogen peroxide and normal saline for cleaning',
      'Sterile gloves',
      'Clean gloves',
      'Pre-cut tracheostomy dressing',
      'New tracheostomy ties if needed',
      'Bag-valve mask for emergency',
      'Pulse oximeter'
    ],
    preparation: [
      'Explain procedure to patient',
      'Position patient semi-Fowler\'s (30-45 degrees)',
      'Pre-oxygenate patient if on oxygen',
      'Assemble equipment at bedside',
      'Verify suction equipment is functioning',
      'Perform hand hygiene'
    ],
    steps: [
      { step: 1, action: 'Assess respiratory status, oxygen saturation, and secretion amount', rationale: 'Establishes baseline and determines urgency of intervention' },
      { step: 2, action: 'Don clean gloves and prepare suction equipment', rationale: 'Prepares for suctioning while maintaining infection control' },
      { step: 3, action: 'Pre-oxygenate patient with 100% O2 for 30-60 seconds if tolerated', rationale: 'Prevents hypoxia during suctioning' },
      { step: 4, action: 'Open sterile suction catheter, maintaining sterility', rationale: 'Lower airway is sterile; prevents infection' },
      { step: 5, action: 'Connect catheter to suction tubing', rationale: 'Prepares system for use' },
      { step: 6, action: 'Insert catheter without suction to just past trach tube length', rationale: 'Prevents trauma to airway mucosa' },
      { step: 7, action: 'Apply intermittent suction while withdrawing, rotating catheter', rationale: 'Maximizes secretion removal while minimizing trauma' },
      { step: 8, action: 'Limit suctioning to 10-15 seconds per pass', rationale: 'Prevents hypoxia and airway trauma' },
      { step: 9, action: 'Allow recovery and re-oxygenate between passes', rationale: 'Maintains adequate oxygenation' },
      { step: 10, action: 'Repeat suctioning as needed (maximum 3 passes)', rationale: 'Excessive suctioning causes trauma and hypoxia' },
      { step: 11, action: 'Remove inner cannula if applicable and clean or replace', rationale: 'Maintains patency and prevents mucus buildup' },
      { step: 12, action: 'Clean stoma site with half-strength hydrogen peroxide, then rinse with saline', rationale: 'Removes secretions and prevents skin breakdown' },
      { step: 13, action: 'Apply clean, pre-cut tracheostomy dressing', rationale: 'Absorbs secretions and protects skin' },
      { step: 14, action: 'Change tracheostomy ties if soiled, keeping one tie secure at all times', rationale: 'Prevents accidental decannulation' },
      { step: 15, action: 'Assess respiratory status post-procedure', rationale: 'Ensures procedure was effective and patient is stable' }
    ],
    safetyAlerts: [
      'Keep spare tracheostomy tube at bedside at all times',
      'Never suction for more than 15 seconds per pass',
      'If unable to pass suction catheter, check for obstruction',
      'Call for help immediately if accidental decannulation occurs',
      'Monitor for bleeding, increased secretions, or signs of infection'
    ],
    nursingConsiderations: [
      'Assess swallowing ability before oral intake',
      'Communicate using alternative methods (writing, communication board)',
      'Humidify inspired air to prevent mucus plugging',
      'Monitor cuff pressure if cuffed tube in place'
    ],
    postProcedureCare: [
      'Return oxygen to prescribed flow rate',
      'Reposition patient for comfort',
      'Provide oral care',
      'Monitor for signs of respiratory distress'
    ],
    documentation: [
      'Amount, color, consistency, and odor of secretions',
      'Patient tolerance of procedure',
      'Pre and post-oxygen saturation',
      'Condition of stoma and surrounding skin',
      'Inner cannula care performed'
    ],
    commonErrors: [
      'Suctioning too long causing hypoxia',
      'Not pre-oxygenating patient',
      'Using excessive suction pressure',
      'Forcing catheter causing trauma',
      'Not keeping spare tube at bedside'
    ],
    tips: [
      'Use normal saline sparingly - evidence doesn\'t support routine instillation',
      'Have assistant stabilize tube when changing ties',
      'Suction mouth/pharynx last with separate catheter',
      'Track secretion patterns to anticipate needs'
    ],
    references: [
      'AARC. (2023). Clinical Practice Guidelines for Tracheostomy Care.',
      'ATS. (2023). Care of the Patient with Tracheostomy.',
      'Potter, P.A., & Perry, A.G. (2023). Fundamentals of Nursing, 11th ed.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes'
  },
  {
    id: 'chest-tube-management',
    title: 'Chest Tube Management',
    category: 'Emergency Procedures',
    categorySlug: 'emergency',
    description: 'Chest tube management involves maintaining and monitoring chest drainage systems to evacuate air, blood, or fluid from the pleural space. Proper management ensures lung re-expansion and prevents complications.',
    indications: [
      'Pneumothorax (air in pleural space)',
      'Hemothorax (blood in pleural space)',
      'Pleural effusion drainage',
      'Post-thoracic surgery',
      'Empyema drainage'
    ],
    contraindications: [
      'Manipulation of chest tube system by unlicensed personnel',
      'Clamping chest tube without physician order',
      'Removing chest tube without order and preparation'
    ],
    equipment: [
      'Chest drainage system (water seal or dry suction)',
      'Suction source if ordered',
      'Sterile water for water seal chamber',
      'Occlusive dressing materials',
      'Tape',
      'Sterile gloves',
      'Two padded clamps (for emergency only)',
      'Petroleum gauze (for emergency tube dislodgement)',
      'Pulse oximeter'
    ],
    preparation: [
      'Verify chest tube placement by reviewing chest x-ray',
      'Ensure drainage system is correctly assembled',
      'Set up at bedside below chest level',
      'Verify connections are tight and secure',
      'Check suction setting if ordered'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and introduce yourself to patient', rationale: 'Infection control and patient identification' },
      { step: 2, action: 'Assess respiratory status: breath sounds, oxygen saturation, respiratory effort', rationale: 'Establishes baseline and detects changes' },
      { step: 3, action: 'Check chest tube insertion site for drainage, subcutaneous emphysema, or infection', rationale: 'Early detection of complications' },
      { step: 4, action: 'Ensure all connections are tight and system is intact', rationale: 'Air leaks compromise drainage and lung expansion' },
      { step: 5, action: 'Verify chest tube is securely taped to patient', rationale: 'Prevents accidental dislodgement' },
      { step: 6, action: 'Check water seal chamber for tidaling with respiration', rationale: 'Tidaling indicates patent tube and pleural pressure changes' },
      { step: 7, action: 'Observe for continuous bubbling in water seal chamber', rationale: 'Continuous bubbling indicates air leak in system or patient' },
      { step: 8, action: 'Check suction control chamber for gentle bubbling (if suction ordered)', rationale: 'Confirms proper suction level' },
      { step: 9, action: 'Measure and record drainage output hourly or as ordered', rationale: 'Monitors bleeding and fluid output' },
      { step: 10, action: 'Mark drainage level on collection chamber with date and time', rationale: 'Provides accurate output measurement' },
      { step: 11, action: 'Ensure tubing is free of kinks and dependent loops', rationale: 'Obstructions prevent proper drainage' },
      { step: 12, action: 'Keep drainage system upright and below chest level at all times', rationale: 'Prevents backflow into pleural space' },
      { step: 13, action: 'Encourage deep breathing exercises and incentive spirometry', rationale: 'Promotes lung expansion and drainage' },
      { step: 14, action: 'Assess pain level and medicate as ordered before activities', rationale: 'Pain control improves breathing and mobility' }
    ],
    safetyAlerts: [
      'NEVER clamp chest tube except briefly during system changes or as ordered',
      'If tube disconnects, place end in sterile water to maintain water seal',
      'Report sudden cessation of drainage or sudden increase >100mL/hour',
      'If tube dislodges, cover site immediately with petroleum gauze and call physician',
      'Keep two padded clamps at bedside for emergency use only'
    ],
    nursingConsiderations: [
      'Never strip or milk chest tubes (can create dangerous negative pressure)',
      'Ambulation is encouraged - maintain system below chest level',
      'Document air leak status using consistent grading scale',
      'Prepare for chest tube removal per physician order'
    ],
    postProcedureCare: [
      'Continue regular respiratory assessments',
      'Encourage incentive spirometry every hour while awake',
      'Position patient for optimal drainage',
      'Manage pain to facilitate deep breathing'
    ],
    documentation: [
      'Amount, color, and consistency of drainage',
      'Presence or absence of tidaling',
      'Air leak status (graded 1-7 or descriptive)',
      'Respiratory assessment findings',
      'Patient tolerance of activity',
      'Suction level if applicable'
    ],
    commonErrors: [
      'Allowing dependent loops in tubing',
      'Raising drainage system above chest level',
      'Clamping tube without order',
      'Stripping or milking the tube',
      'Not marking drainage levels'
    ],
    tips: [
      'Coil excess tubing on bed, not on floor',
      'Secure connections with tape but allow for inspection',
      'During transport, keep system upright and below chest',
      'If system cracks, submerge chest tube end in bottle of sterile water'
    ],
    references: [
      'AACN. (2023). Procedure Manual for High Acuity, Progressive and Critical Care.',
      'Bauman, M., & Handley, C. (2023). Chest Tube Care: The More You Know.',
      'Lewis, S.L., et al. (2023). Medical-Surgical Nursing, 12th ed.'
    ],
    difficulty: 'advanced',
    estimatedTime: '15-20 minutes for full assessment'
  },
  {
    id: 'blood-glucose-monitoring',
    title: 'Blood Glucose Monitoring',
    category: 'Vital Signs',
    categorySlug: 'vital-signs',
    description: 'Capillary blood glucose monitoring is a point-of-care test used to measure blood sugar levels. Accurate technique is essential for proper diabetes management and detection of hypo/hyperglycemia.',
    indications: [
      'Diabetes mellitus management',
      'Before and after meals in diabetic patients',
      'Signs of hypoglycemia (shakiness, sweating, confusion)',
      'Signs of hyperglycemia (polyuria, polydipsia, fatigue)',
      'Patients on insulin or oral hypoglycemic agents',
      'Critically ill patients',
      'Total parenteral nutrition monitoring'
    ],
    contraindications: [
      'Do not use fingertip sites in patients with peripheral vascular disease',
      'Avoid sites with edema or impaired circulation',
      'Do not use alternate sites during hypoglycemia (fingertip only)'
    ],
    equipment: [
      'Blood glucose meter',
      'Glucose test strips compatible with meter',
      'Lancet device with sterile lancet',
      'Alcohol prep pad',
      'Gauze or cotton ball',
      'Gloves',
      'Sharps container',
      'Glucose log if applicable'
    ],
    preparation: [
      'Verify glucose meter is calibrated and not expired',
      'Check test strip expiration date',
      'Have patient wash hands with warm water (improves blood flow)',
      'Avoid using alcohol immediately before (can falsely lower results)',
      'Gather all supplies at bedside'
    ],
    steps: [
      { step: 1, action: 'Perform hand hygiene and don gloves', rationale: 'Standard precautions for blood exposure' },
      { step: 2, action: 'Verify patient identity and explain procedure', rationale: 'Ensures correct patient and promotes cooperation' },
      { step: 3, action: 'Turn on glucose meter and insert test strip', rationale: 'Prepares meter; some meters auto-code from strip' },
      { step: 4, action: 'Select puncture site (side of fingertip preferred)', rationale: 'Sides have fewer nerve endings and better capillary blood flow' },
      { step: 5, action: 'Clean site with alcohol and allow to air dry completely', rationale: 'Alcohol can dilute blood and affect results' },
      { step: 6, action: 'Hold finger below heart level and massage toward tip', rationale: 'Increases blood flow to puncture site' },
      { step: 7, action: 'Place lancet device firmly against side of finger and activate', rationale: 'Firm placement ensures adequate penetration' },
      { step: 8, action: 'Wipe away first drop of blood with gauze', rationale: 'First drop may contain interstitial fluid affecting accuracy' },
      { step: 9, action: 'Gently squeeze finger to form large hanging drop', rationale: 'Adequate sample size ensures accurate reading' },
      { step: 10, action: 'Touch blood drop to test strip application area', rationale: 'Strip should wick blood automatically' },
      { step: 11, action: 'Apply pressure to puncture site with gauze', rationale: 'Achieves hemostasis' },
      { step: 12, action: 'Wait for meter to display result', rationale: 'Results typically appear in 5-10 seconds' },
      { step: 13, action: 'Compare result to expected range and take action if needed', rationale: 'Timely intervention for abnormal values' },
      { step: 14, action: 'Dispose of lancet and test strip properly', rationale: 'Prevents sharps injuries and biohazard exposure' }
    ],
    safetyAlerts: [
      'HYPOGLYCEMIA (<70 mg/dL): Treat immediately per protocol',
      'SEVERE HYPOGLYCEMIA (<40 mg/dL): Emergency - may require IV dextrose',
      'HYPERGLYCEMIA (>300 mg/dL): Check for ketones, notify physician',
      'Never share lancet devices between patients - single patient use only',
      'Clean meter between patients per manufacturer guidelines'
    ],
    nursingConsiderations: [
      'Rotate puncture sites to prevent callus formation',
      'Avoid thumb and index finger (used most often)',
      'Ensure meter is quality controlled per hospital policy',
      'Consider continuous glucose monitoring for unstable patients'
    ],
    postProcedureCare: [
      'Document result in glucose log and medical record',
      'Administer insulin or treatment per protocol',
      'Educate patient on self-monitoring technique',
      'Plan next monitoring time'
    ],
    documentation: [
      'Date, time, and blood glucose result',
      'Site used for testing',
      'Treatment given if applicable',
      'Patient symptoms if abnormal result',
      'Notification of physician if indicated'
    ],
    commonErrors: [
      'Using expired test strips',
      'Not allowing alcohol to dry completely',
      'Squeezing finger too hard (dilutes with interstitial fluid)',
      'Insufficient blood sample',
      'Using wrong meter code for strips'
    ],
    tips: [
      'Warm hands increase blood flow and ease of sampling',
      'Use less painful alternate sites when appropriate',
      'Store test strips per manufacturer recommendations',
      'If result doesn\'t match clinical picture, repeat test'
    ],
    references: [
      'American Diabetes Association. (2024). Standards of Care in Diabetes.',
      'CDC. (2023). Infection Prevention during Blood Glucose Monitoring.',
      'FDA. (2023). Blood Glucose Meter Accuracy Requirements.'
    ],
    difficulty: 'basic',
    estimatedTime: '2-3 minutes'
  },
  {
    id: 'feeding-tube-administration',
    title: 'Enteral Feeding Administration',
    category: 'Nasogastric Procedures',
    categorySlug: 'nasogastric',
    description: 'Enteral feeding administration involves delivering liquid nutrition directly into the gastrointestinal tract through a feeding tube. This procedure requires verification of tube placement and careful monitoring to prevent complications.',
    indications: [
      'Inability to swallow safely',
      'Neurological conditions affecting swallowing',
      'Prolonged mechanical ventilation',
      'Malnutrition requiring nutritional support',
      'GI surgery requiring bowel rest with distal feeding',
      'Facial or esophageal trauma'
    ],
    contraindications: [
      'Bowel obstruction or ileus',
      'Gastrointestinal bleeding',
      'Severe vomiting or high gastric residuals',
      'Unconfirmed tube placement',
      'Hemodynamic instability'
    ],
    equipment: [
      'Prescribed enteral formula at room temperature',
      'Feeding pump and tubing (for continuous feeds)',
      'Syringe (60 mL catheter tip)',
      'Stethoscope',
      'pH strips',
      'Clean gloves',
      'Water for flushing (as ordered)',
      'Measuring cup or graduated container'
    ],
    preparation: [
      'Verify physician order for formula type and rate',
      'Check formula expiration date',
      'Warm formula to room temperature if refrigerated',
      'Position patient with head of bed elevated 30-45 degrees',
      'Perform hand hygiene',
      'Verify tube placement before each feeding'
    ],
    steps: [
      { step: 1, action: 'Verify patient identity and explain procedure', rationale: 'Ensures correct patient and informed participation' },
      { step: 2, action: 'Elevate head of bed to 30-45 degrees', rationale: 'Reduces aspiration risk' },
      { step: 3, action: 'Check external tube marking matches documented length', rationale: 'Initial check that tube hasn\'t migrated' },
      { step: 4, action: 'Aspirate gastric contents and check pH (should be <5.5)', rationale: 'pH confirmation helps verify gastric placement' },
      { step: 5, action: 'Check gastric residual volume (GRV)', rationale: 'High residuals may indicate intolerance or obstruction' },
      { step: 6, action: 'Return residual to stomach unless otherwise ordered', rationale: 'Prevents electrolyte imbalance' },
      { step: 7, action: 'Flush tube with 30 mL water', rationale: 'Ensures patency and clears tube' },
      { step: 8, action: 'For bolus feeding: attach syringe and slowly pour formula', rationale: 'Gravity flow prevents cramping; rate 200-400 mL over 15-30 min' },
      { step: 9, action: 'For continuous feeding: prime pump tubing and set rate', rationale: 'Pump ensures accurate, consistent delivery' },
      { step: 10, action: 'Connect tubing to feeding tube securely', rationale: 'Prevents disconnection and aspiration risk' },
      { step: 11, action: 'Start feeding at prescribed rate', rationale: 'Gradual advancement prevents intolerance' },
      { step: 12, action: 'Flush tube with 30 mL water after bolus feeding or Q4-6h for continuous', rationale: 'Maintains patency and provides additional hydration' },
      { step: 13, action: 'Maintain head elevation for 30-60 minutes after feeding', rationale: 'Reduces aspiration risk during gastric emptying' },
      { step: 14, action: 'Document feeding and patient tolerance', rationale: 'Tracks intake and identifies issues' }
    ],
    safetyAlerts: [
      'NEVER feed through tube without verifying placement',
      'Hold feeding if gastric residual >500 mL or per facility protocol',
      'Stop feeding immediately if patient shows signs of aspiration',
      'Blue food coloring should NOT be used to check placement (FDA warning)',
      'Change feeding bags and tubing every 24-48 hours per policy'
    ],
    nursingConsiderations: [
      'Monitor for feeding intolerance (nausea, vomiting, distension, diarrhea)',
      'Check tube placement before each intermittent feeding',
      'Ensure formula is not hanging for more than 4-8 hours at room temperature',
      'Monitor glucose in diabetic patients'
    ],
    postProcedureCare: [
      'Keep head of bed elevated as ordered',
      'Monitor for signs of aspiration',
      'Track intake and output',
      'Assess for bowel sounds and abdominal distension'
    ],
    documentation: [
      'Type and amount of formula administered',
      'Rate of administration (if continuous)',
      'Tube placement verification method and findings',
      'Gastric residual volume and action taken',
      'Patient tolerance and any complications',
      'Flush amount given'
    ],
    commonErrors: [
      'Feeding without confirming placement',
      'Not checking residuals',
      'Formula hanging too long (bacterial growth)',
      'Forgetting to flush tube (leads to clogging)',
      'Head of bed not elevated'
    ],
    tips: [
      'Flush with water before and after medications',
      'Don\'t mix medications with formula - give separately',
      'Coca-Cola or meat tenderizer NOT recommended for clogs',
      'Use warm water and gentle pressure for minor clogs'
    ],
    references: [
      'ASPEN. (2023). Enteral Nutrition Practice Recommendations.',
      'AACN. (2023). Verification of Feeding Tube Placement.',
      'Bankhead, R., et al. (2009). ASPEN Enteral Nutrition Practice Guidelines.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-30 minutes'
  },
  {
    id: 'pressure-injury-prevention',
    title: 'Pressure Injury Prevention and Assessment',
    category: 'Wound Care',
    categorySlug: 'wound-care',
    description: 'Pressure injury prevention involves systematic skin assessment, risk identification, and implementation of interventions to prevent tissue damage from sustained pressure. Early identification and intervention are key to prevention.',
    indications: [
      'All hospitalized patients (routine screening)',
      'Immobile or bed-bound patients',
      'Patients with decreased sensation',
      'Patients with poor nutrition',
      'Patients with incontinence',
      'Critically ill patients',
      'Post-surgical patients'
    ],
    contraindications: [
      'None for prevention activities'
    ],
    equipment: [
      'Pressure injury risk assessment tool (Braden Scale)',
      'Skin assessment documentation form',
      'Pressure redistribution surfaces as needed',
      'Positioning devices (pillows, wedges, heel protectors)',
      'Moisture barrier cream',
      'Incontinence supplies',
      'Good lighting for skin inspection',
      'Turning schedule'
    ],
    preparation: [
      'Review patient history and risk factors',
      'Ensure adequate lighting',
      'Gather assessment tools',
      'Plan for patient privacy during skin inspection',
      'Know facility-specific prevention protocol'
    ],
    steps: [
      { step: 1, action: 'Complete pressure injury risk assessment (Braden Scale) on admission', rationale: 'Identifies at-risk patients requiring prevention interventions' },
      { step: 2, action: 'Perform complete skin assessment, examining all bony prominences', rationale: 'Detects early skin changes before injury develops' },
      { step: 3, action: 'Inspect sacrum, heels, elbows, shoulders, back of head, ears', rationale: 'These are highest-risk areas for pressure injury development' },
      { step: 4, action: 'Note any areas of redness, warmth, edema, or skin breakdown', rationale: 'Early signs indicate need for intervention' },
      { step: 5, action: 'For darkly pigmented skin, assess for changes in color, temperature, and texture', rationale: 'Erythema may not be visible; other signs are more reliable' },
      { step: 6, action: 'Determine if redness is blanchable or non-blanchable', rationale: 'Non-blanchable erythema indicates Stage 1 pressure injury' },
      { step: 7, action: 'Implement appropriate pressure redistribution surface', rationale: 'Reduces interface pressure below capillary closing pressure' },
      { step: 8, action: 'Reposition patient at least every 2 hours or per protocol', rationale: 'Relieves sustained pressure and restores blood flow' },
      { step: 9, action: 'Use 30-degree lateral positioning, avoid 90-degree side-lying', rationale: 'Reduces pressure over trochanters' },
      { step: 10, action: 'Keep heels completely off bed using pillows or heel protectors', rationale: 'Heels have minimal tissue over bone, high injury risk' },
      { step: 11, action: 'Manage moisture from incontinence, perspiration, or wound drainage', rationale: 'Moisture increases friction and skin vulnerability' },
      { step: 12, action: 'Apply moisture barrier to at-risk skin areas', rationale: 'Protects skin from moisture damage' },
      { step: 13, action: 'Ensure adequate nutrition and hydration', rationale: 'Malnutrition impairs tissue tolerance and healing' },
      { step: 14, action: 'Document all findings and interventions', rationale: 'Ensures continuity and tracks skin status' }
    ],
    safetyAlerts: [
      'Do NOT massage reddened areas - can cause additional tissue damage',
      'Do NOT use donut-type devices - they create pressure around the wound',
      'Report any new skin breakdown to physician immediately',
      'Patients with sensory deficits cannot feel pressure - increase monitoring'
    ],
    nursingConsiderations: [
      'Reassess Braden Score with any change in condition',
      'Use lift sheets to reposition - avoid dragging',
      'Consider nutrition consultation for at-risk patients',
      'Involve patient and family in prevention strategies'
    ],
    postProcedureCare: [
      'Continue regular repositioning schedule',
      'Monitor effectiveness of interventions',
      'Adjust prevention plan based on patient response',
      'Communicate plan across shifts'
    ],
    documentation: [
      'Braden Scale score and subscores',
      'Complete skin assessment findings',
      'Description of any skin changes (location, size, stage if applicable)',
      'Prevention interventions in place',
      'Repositioning schedule and adherence',
      'Patient and family education provided'
    ],
    commonErrors: [
      'Massaging areas of non-blanchable redness',
      'Infrequent repositioning',
      'Not inspecting under medical devices',
      'Underestimating risk in patients who can ambulate minimally',
      'Not floating heels adequately'
    ],
    tips: [
      'Use 30-degree tilt rather than full side-lying when possible',
      'Inspect under devices (O2 tubing, splints, TED stockings) regularly',
      'Chair-bound patients need off-loading every 15 minutes',
      'Take photos of skin changes for documentation per policy'
    ],
    references: [
      'NPIAP. (2019). Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline.',
      'Braden, B., & Bergstrom, N. (1987). Braden Scale for Predicting Pressure Sore Risk.',
      'AHRQ. (2023). Preventing Pressure Ulcers in Hospitals Toolkit.'
    ],
    difficulty: 'basic',
    estimatedTime: '15-20 minutes for full assessment'
  },
  {
    id: 'pain-assessment',
    title: 'Comprehensive Pain Assessment',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'Pain assessment is the systematic evaluation of a patient\'s pain experience, including intensity, location, quality, and impact on function. Accurate assessment is essential for effective pain management and is considered the "fifth vital sign."',
    indications: [
      'All patient admissions',
      'Routine vital sign assessment',
      'Before and after pain interventions',
      'Change in patient condition',
      'Post-operative monitoring',
      'Patient report of pain or discomfort'
    ],
    contraindications: [
      'None for assessment - all patients deserve pain evaluation'
    ],
    equipment: [
      'Appropriate pain assessment scale:',
      '- Numeric Rating Scale (NRS) 0-10',
      '- Wong-Baker FACES Scale (pediatric/cognitively impaired)',
      '- FLACC Scale (nonverbal patients)',
      '- Critical Care Pain Observation Tool (CPOT)',
      'Documentation materials'
    ],
    preparation: [
      'Select appropriate assessment tool for patient population',
      'Ensure privacy and comfortable environment',
      'Allow adequate time for patient to respond',
      'Consider cultural factors affecting pain expression'
    ],
    steps: [
      { step: 1, action: 'Introduce purpose of assessment and assure patient their pain will be addressed', rationale: 'Establishes trust and encourages honest reporting' },
      { step: 2, action: 'Ask patient to rate pain intensity using appropriate scale (0-10)', rationale: 'Quantifies pain for tracking and treatment decisions' },
      { step: 3, action: 'Ask patient to point to or describe pain location(s)', rationale: 'Identifies affected areas and possible causes' },
      { step: 4, action: 'Have patient describe quality of pain (sharp, dull, burning, aching)', rationale: 'Quality helps identify pain type and etiology' },
      { step: 5, action: 'Determine onset: When did pain start? What were you doing?', rationale: 'Identifies precipitating factors' },
      { step: 6, action: 'Assess duration: Is pain constant or intermittent?', rationale: 'Guides treatment approach' },
      { step: 7, action: 'Identify aggravating factors: What makes pain worse?', rationale: 'Helps avoid triggers and guides activity modifications' },
      { step: 8, action: 'Identify alleviating factors: What helps reduce pain?', rationale: 'Incorporates effective strategies into care plan' },
      { step: 9, action: 'Ask about radiation: Does pain travel or spread anywhere?', rationale: 'May indicate referred pain or nerve involvement' },
      { step: 10, action: 'Assess effect on function: How does pain affect daily activities, sleep, mood?', rationale: 'Determines impact on quality of life' },
      { step: 11, action: 'For nonverbal patients: observe for behavioral indicators', rationale: 'Facial grimacing, guarding, restlessness indicate pain' },
      { step: 12, action: 'Document using PQRST or OLDCARTS framework', rationale: 'Ensures comprehensive, standardized documentation' },
      { step: 13, action: 'Develop pain management plan with patient', rationale: 'Patient involvement improves outcomes' },
      { step: 14, action: 'Reassess pain after intervention (30-60 min for meds, 15-30 min for IV)', rationale: 'Evaluates effectiveness of treatment' }
    ],
    safetyAlerts: [
      'Sudden severe pain may indicate emergency (MI, ruptured aneurysm, bowel obstruction)',
      'Patients may underreport pain due to cultural beliefs or fear of addiction',
      'Elderly patients may present atypically - monitor for behavioral changes',
      'Never dismiss patient report of pain - pain is what patient says it is'
    ],
    nursingConsiderations: [
      'Pain is subjective - patient is the authority on their pain',
      'Consider cultural influences on pain expression',
      'Assess pain regularly and with each vital sign check',
      'Use age and cognitively appropriate tools'
    ],
    postProcedureCare: [
      'Implement multimodal pain management approach',
      'Educate patient about pain medications and non-pharmacologic options',
      'Set realistic pain management goals with patient',
      'Schedule regular reassessments'
    ],
    documentation: [
      'Pain intensity rating (number or descriptor)',
      'Location(s) and quality of pain',
      'Onset, duration, and pattern',
      'Aggravating and alleviating factors',
      'Effect on function and quality of life',
      'Interventions provided and patient response',
      'Patient\'s pain goal'
    ],
    commonErrors: [
      'Not believing patient\'s report of pain',
      'Not reassessing after intervention',
      'Using wrong assessment tool for patient population',
      'Documenting own interpretation instead of patient\'s words',
      'Assuming sleeping patient is not in pain'
    ],
    tips: [
      'Use PQRST: Provokes, Quality, Radiates, Severity, Time',
      'Ask "How is your comfort?" as alternative to "pain"',
      'Consider that "acceptable pain level" differs by patient',
      'Include non-pharmacologic interventions in plan'
    ],
    references: [
      'American Pain Society. (2016). Principles of Analgesic Use.',
      'The Joint Commission. (2023). Pain Assessment and Management Standards.',
      'IASP. (2020). Revised Definition of Pain.'
    ],
    difficulty: 'basic',
    estimatedTime: '5-10 minutes'
  },
  {
    id: 'fall-prevention',
    title: 'Fall Risk Assessment and Prevention',
    category: 'Fundamentals of Nursing',
    categorySlug: 'fundamentals',
    description: 'Fall prevention involves systematic risk assessment and implementation of interventions to reduce patient falls in healthcare settings. Falls are a leading cause of hospital-acquired injury and are largely preventable.',
    indications: [
      'All hospitalized patients on admission',
      'Transfer from another unit',
      'Change in patient condition',
      'Post-procedure or after medication changes',
      'After a fall or near-fall event',
      'Per facility policy intervals'
    ],
    contraindications: [
      'None - all patients require fall risk assessment'
    ],
    equipment: [
      'Fall risk assessment tool (Morse Fall Scale, Hendrich II)',
      'Yellow fall risk identification items:',
      '- Yellow wristband',
      '- Yellow non-skid socks',
      '- Yellow blanket or magnet for room',
      'Bed alarm system',
      'Chair alarm if applicable',
      'Ambulatory aids if needed',
      'Hip protectors for high-risk patients'
    ],
    preparation: [
      'Review patient history for fall risk factors',
      'Obtain appropriate assessment tool',
      'Know facility fall prevention protocol',
      'Prepare identification and prevention supplies'
    ],
    steps: [
      { step: 1, action: 'Complete fall risk assessment using facility-approved tool', rationale: 'Identifies patients at risk requiring interventions' },
      { step: 2, action: 'Assess history of falls within past year', rationale: 'Prior falls are strongest predictor of future falls' },
      { step: 3, action: 'Evaluate secondary diagnoses (weakness, incontinence, confusion)', rationale: 'Multiple conditions increase fall risk' },
      { step: 4, action: 'Review medications for fall-risk drugs (sedatives, antihypertensives, diuretics)', rationale: 'Medications contribute significantly to fall risk' },
      { step: 5, action: 'Assess ambulation and transfer ability', rationale: 'Determines need for assistance and aids' },
      { step: 6, action: 'Evaluate mental status and awareness of limitations', rationale: 'Confusion increases risk due to impaired judgment' },
      { step: 7, action: 'Apply yellow fall risk identifiers for at-risk patients', rationale: 'Visual cues alert all staff to patient\'s fall risk' },
      { step: 8, action: 'Ensure call light is within reach and patient knows how to use it', rationale: 'Enables patient to call for assistance' },
      { step: 9, action: 'Keep bed in lowest position with wheels locked', rationale: 'Reduces injury if fall occurs' },
      { step: 10, action: 'Activate bed alarm for high-risk patients', rationale: 'Alerts staff when patient attempts to exit bed' },
      { step: 11, action: 'Ensure non-skid footwear is worn during ambulation', rationale: 'Reduces slipping risk' },
      { step: 12, action: 'Clear pathway of clutter, cords, and obstacles', rationale: 'Removes tripping hazards' },
      { step: 13, action: 'Ensure adequate lighting, especially at night', rationale: 'Poor visibility contributes to falls' },
      { step: 14, action: 'Toilet patient on regular schedule if incontinent', rationale: 'Rushing to bathroom increases fall risk' },
      { step: 15, action: 'Round hourly on high-risk patients', rationale: 'Proactive care addresses needs before patient attempts independently' },
      { step: 16, action: 'Educate patient and family on fall prevention', rationale: 'Involves patient in own safety' }
    ],
    safetyAlerts: [
      'Patients receiving new medications (especially sedatives) need immediate reassessment',
      'Post-procedure patients may have temporary increased risk',
      'Patients who refuse interventions need documentation and alternative approaches',
      'Near-falls require same response as actual falls'
    ],
    nursingConsiderations: [
      'Reassess fall risk with any change in condition',
      'Balance fall prevention with patient mobility needs',
      'Consider physical therapy consultation for gait issues',
      'Involve patient in setting mobility goals'
    ],
    postProcedureCare: [
      'If fall occurs: assess for injury, notify physician, complete incident report',
      'Implement post-fall huddle to identify contributing factors',
      'Update care plan based on assessment findings',
      'Communicate fall risk status at handoff'
    ],
    documentation: [
      'Fall risk score and risk level',
      'Specific risk factors identified',
      'Prevention interventions implemented',
      'Patient and family education provided',
      'If fall occurs: complete incident report with details'
    ],
    commonErrors: [
      'Not reassessing after condition or medication changes',
      'Bed alarm not activated or not audible',
      'Call light out of reach',
      'Not involving patient in prevention plan',
      'Assuming low-risk patients won\'t fall'
    ],
    tips: [
      'Cluster care to reduce number of bed exits',
      'Consider 1:1 sitter for highest risk patients',
      'Address modifiable risk factors (medication review, PT)',
      'Make prevention interventions part of routine care'
    ],
    references: [
      'AHRQ. (2023). Preventing Falls in Hospitals Toolkit.',
      'The Joint Commission. (2023). Fall Prevention Standards.',
      'Morse, J.M. (2008). Preventing Patient Falls.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes for full assessment'
  },
  {
    id: 'medication-reconciliation',
    title: 'Medication Reconciliation',
    category: 'Medication Administration',
    categorySlug: 'medication-administration',
    description: 'Medication reconciliation is the process of comparing a patient\'s current medication orders against all medications the patient has been taking to identify and resolve discrepancies. This process occurs at every transition of care.',
    indications: [
      'Hospital admission',
      'Transfer between units or facilities',
      'Discharge from hospital',
      'Change in level of care',
      'After procedure requiring anesthesia',
      'Clinic visits with medication changes'
    ],
    contraindications: [
      'None - required for all patients at transitions of care'
    ],
    equipment: [
      'Current medication list from medical record',
      'Medication history form',
      'Pharmacy resources for drug identification',
      'Access to prescription monitoring database',
      'Patient\'s medication bottles if available'
    ],
    preparation: [
      'Review patient chart for existing medication information',
      'Gather any outside records or medication lists',
      'Allow adequate time for thorough interview',
      'Prepare documentation form'
    ],
    steps: [
      { step: 1, action: 'Introduce self and explain importance of accurate medication list', rationale: 'Patient understanding improves participation' },
      { step: 2, action: 'Ask patient to list all medications they take at home', rationale: 'Patient is primary source for actual medication use' },
      { step: 3, action: 'For each medication, ask: name, dose, frequency, route, reason for taking', rationale: 'Complete information prevents errors' },
      { step: 4, action: 'Ask about prescription medications from all providers', rationale: 'Patients often see multiple prescribers' },
      { step: 5, action: 'Ask specifically about over-the-counter medications', rationale: 'OTCs can cause interactions and are often forgotten' },
      { step: 6, action: 'Ask about vitamins, supplements, and herbal products', rationale: 'These can interact with prescription medications' },
      { step: 7, action: 'Ask about PRN medications and actual use patterns', rationale: 'Actual use may differ from prescribed' },
      { step: 8, action: 'Ask about any recently stopped or changed medications', rationale: 'Recent changes are important clinical information' },
      { step: 9, action: 'Verify allergies and type of reaction', rationale: 'Prevents administration of contraindicated medications' },
      { step: 10, action: 'Compare obtained list with medication orders', rationale: 'Identifies discrepancies requiring resolution' },
      { step: 11, action: 'Identify discrepancies: omissions, additions, duplications, interactions', rationale: 'Categories guide resolution approach' },
      { step: 12, action: 'Clarify discrepancies with patient or provider', rationale: 'Some may be intentional; others are errors' },
      { step: 13, action: 'Document reconciled medication list in chart', rationale: 'Creates accurate record for all caregivers' },
      { step: 14, action: 'Communicate unresolved issues to physician', rationale: 'Physician must make prescribing decisions' },
      { step: 15, action: 'At discharge: provide updated medication list to patient', rationale: 'Patient needs accurate list for home use' }
    ],
    safetyAlerts: [
      'High-alert medications (anticoagulants, insulin, opioids) require extra verification',
      'Similar medication names (sound-alike, look-alike) require careful confirmation',
      'New allergies or adverse reactions must be documented immediately',
      'Discrepancies involving controlled substances require immediate clarification'
    ],
    nursingConsiderations: [
      'Use teach-back method to verify patient understanding',
      'Include family members when patient is cognitively impaired',
      'Consider pharmacy consultation for complex regimens',
      'Use pill identification resources when needed'
    ],
    postProcedureCare: [
      'Ensure reconciled list is available to all care team members',
      'Provide written medication list to patient at discharge',
      'Review discharge medications with patient and family',
      'Arrange follow-up for ongoing medication management'
    ],
    documentation: [
      'Complete home medication list with doses and frequencies',
      'Source of medication information',
      'Allergies and reactions',
      'Discrepancies identified and how resolved',
      'Patient education provided'
    ],
    commonErrors: [
      'Not asking about OTC and herbal products',
      'Not verifying actual adherence patterns',
      'Not reconciling at every transition',
      'Not providing written list at discharge',
      'Assuming chart is accurate without verification'
    ],
    tips: [
      'Ask "brown bag" patients to bring all medication containers',
      'Contact pharmacy if uncertain about home medications',
      'Use open-ended questions rather than yes/no',
      'Schedule enough time - rushing leads to errors'
    ],
    references: [
      'The Joint Commission. (2023). National Patient Safety Goals.',
      'ISMP. (2023). Medication Reconciliation Best Practices.',
      'WHO. (2019). Medication Safety in Transitions of Care.'
    ],
    difficulty: 'intermediate',
    estimatedTime: '15-30 minutes'
  },
  {
    id: 'incentive-spirometry',
    title: 'Incentive Spirometry Teaching',
    category: 'Oxygen Therapy',
    categorySlug: 'oxygen-therapy',
    description: 'Incentive spirometry is a breathing exercise using a device that encourages sustained maximal inspiration to prevent or treat atelectasis. Patient education and proper technique are essential for effectiveness.',
    indications: [
      'Post-operative patients (especially abdominal, thoracic surgery)',
      'Patients at risk for atelectasis',
      'Prolonged bed rest or immobility',
      'Neuromuscular weakness',
      'Chronic lung disease exacerbations',
      'Pre-operative teaching'
    ],
    contraindications: [
      'Hemoptysis (active coughing of blood)',
      'Untreated pneumothorax',
      'Acute asthma exacerbation',
      'Patients unable to follow instructions'
    ],
    equipment: [
      'Incentive spirometer device',
      'Tissues',
      'Pillow for splinting (surgical patients)',
      'Teaching materials if available'
    ],
    preparation: [
      'Check order or protocol for incentive spirometry',
      'Select appropriate device',
      'Ensure patient is not in acute respiratory distress',
      'Position patient upright (sitting preferred)',
      'Administer pain medication 30 minutes before for surgical patients'
    ],
    steps: [
      { step: 1, action: 'Explain purpose: to keep lungs expanded and prevent complications', rationale: 'Patient understanding improves adherence' },
      { step: 2, action: 'Set goal marker based on patient\'s age, size, and condition', rationale: 'Realistic goals motivate patient' },
      { step: 3, action: 'Have patient hold spirometer upright', rationale: 'Device must be level for accurate measurement' },
      { step: 4, action: 'Instruct patient to exhale normally', rationale: 'Prepares for maximal inspiration' },
      { step: 5, action: 'Place mouthpiece in mouth and seal lips tightly', rationale: 'Prevents air leak which reduces effectiveness' },
      { step: 6, action: 'Instruct to inhale slowly and deeply through mouth', rationale: 'Slow inhalation ensures alveoli are fully inflated' },
      { step: 7, action: 'Watch indicator rise - encourage reaching goal marker', rationale: 'Visual feedback motivates patient' },
      { step: 8, action: 'Have patient hold breath for 3-5 seconds at maximum inspiration', rationale: 'Sustained inspiration opens collapsed alveoli' },
      { step: 9, action: 'Remove mouthpiece and exhale normally', rationale: 'Controlled exhalation is comfortable' },
      { step: 10, action: 'Rest for several breaths before repeating', rationale: 'Prevents hyperventilation and lightheadedness' },
      { step: 11, action: 'Have patient perform 10-15 breaths per session', rationale: 'Adequate repetitions for therapeutic benefit' },
      { step: 12, action: 'Encourage use every 1-2 hours while awake', rationale: 'Frequency is key to preventing atelectasis' },
      { step: 13, action: 'For surgical patients: teach splinting with pillow during coughing', rationale: 'Reduces incisional pain and improves cough effectiveness' },
      { step: 14, action: 'Document teaching, goal, and patient demonstration', rationale: 'Tracks education and competency' }
    ],
    safetyAlerts: [
      'Stop if patient becomes dizzy or lightheaded',
      'Do not use if patient has active hemoptysis',
      'Pain control is essential for surgical patients to participate effectively',
      'Supervise closely in patients with cognitive impairment'
    ],
    nursingConsiderations: [
      'Schedule before meals to prevent nausea',
      'Coordinate with pain medication timing',
      'Validate patient technique each shift initially',
      'Auscultate lungs to assess effectiveness'
    ],
    postProcedureCare: [
      'Leave spirometer at bedside within patient reach',
      'Post reminder signs if helpful',
      'Encourage ambulation to complement spirometry',
      'Monitor oxygen saturation'
    ],
    documentation: [
      'Patient teaching provided and return demonstration',
      'Goal volume set and achieved',
      'Number of breaths performed',
      'Patient tolerance',
      'Lung sounds before and after'
    ],
    commonErrors: [
      'Inhaling too fast (ball/piston rises too quickly)',
      'Not holding breath at peak inspiration',
      'Exhaling through device',
      'Not performing frequently enough',
      'Not using pillow to splint incision'
    ],
    tips: [
      'Compare to "sucking through a straw" for patient understanding',
      'Place spirometer visible as reminder to use',
      'Encourage family to remind and assist patient',
      'Progress goal as patient improves'
    ],
    references: [
      'AARC. (2011). Incentive Spirometry Clinical Practice Guideline.',
      'Restrepo, R., et al. (2011). Incentive Spirometry Update.',
      'Lewis, S.L., et al. (2023). Medical-Surgical Nursing, 12th ed.'
    ],
    difficulty: 'basic',
    estimatedTime: '10-15 minutes for teaching'
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
