from pydantic import BaseModel
from ...bbox.schemas.bbox_schema import ExtendedBBoxResponse


class ExaminationResponse(BaseModel):
    id: int
    id_user: int
    id_sample: int
    to_further_verification: bool | None = None
    bad_quality: bool | None = None


class ExtendedExaminationResponse(ExaminationResponse):
    bboxes: list[ExtendedBBoxResponse]